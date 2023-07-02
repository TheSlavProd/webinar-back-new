import * as dotenv from 'dotenv';
dotenv.config();

export const DB_CONFIG = {
    DATABASE: process.env.DB_DATABASE.trim(),
    USERNAME: process.env.DB_USERNAME.trim(),
    PASSWORD: process.env.DB_PASSWORD.trim(),
    HOST: process.env.DB_HOST.trim(),
    PORT: process.env.DB_PORT.trim(),
}

export const PORT = +process.env.PORT.trim();
export const JWT_SECRET = process.env.JWT_SECRET.trim();