import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { fastifySwagger, } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { routes } from "./routes/routes";
import { PrismaClient } from "@prisma/client";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: "*" })

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "Ethern App API",
            version: "1.0.0",
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
})


const prisma = new PrismaClient();
app.register(async (app) => {
    await routes(app, prisma);
});

const port = parseInt(process.env.PORT, 10) || 3333;

app.listen({ port }).then(() => {
    console.log('HTTP server is running on port', port);
}).catch(err => {
    console.error('Error starting server:', err);
});