import z from "zod"
import { FastifyTypedInstace } from "../types/types";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";

interface UserType {
    id: string,
    name: string,
    email: string,
}
const users = []

export async function routes(app: FastifyTypedInstace, prisma: PrismaClient) {
    app.get('/users', {
        schema: {
            tags: ['user'],
            description: "List users",
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                }))
            }
        },
    }, async () => {
        const users = await prisma.user.findMany();
        return users;
    })

    app.post('/users', {
        schema: {
            tags: ['user'],
            description: "Create a new user",
            body: z.object({
                name: z.string(),
                email: z.string().email(),
            }),
            response: {
                200: z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string().email(),
                }).describe("User Created"),
                201: z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string().email(),
                }).describe("User Created"),
            }
        },
    }, async (request, reply) => {
        const { name, email } = request.body

        const user = await prisma.user.create({
            data: { id: randomUUID(), name, email },
        });

        return reply.status(201).send(user)
    })
}