import * as dotenv from 'dotenv';
dotenv.config();

export const DB_CONFIG = {
    DATABASE: process.env.DB_DATABASE,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
}

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;