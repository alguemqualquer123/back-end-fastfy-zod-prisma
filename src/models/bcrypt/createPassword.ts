import bcrypt from "bcrypt"

const secretKey = process.env.JWL_SECRET || 'your_secret_key';

export async function hashPassword(password: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(`${secretKey}-${password}`, saltRounds);
    return hashedPassword;
}

export async function verifyPassword(plainPassword, hashedPassword) {
    const match = await bcrypt.compare(`${secretKey}-${plainPassword}`, hashedPassword);
    return match;
}