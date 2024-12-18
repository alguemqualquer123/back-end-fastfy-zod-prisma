import jwt from 'jsonwebtoken';

const secretKey = process.env.JWL_SECRET || 'your_secret_key';


export function generateToken(payload: string) {
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
}

export function verifyToken(token: string) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        return null;
    }
}
