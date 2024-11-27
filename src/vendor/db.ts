
import { PrismaClient } from "@prisma/client";


declare global {
    var prisma: PrismaClient | undefined;
}

// export const db = global.prisma || new PrismaClient();

const db = global.prisma || new PrismaClient();

export default db;

if (process.env.NODE_ENV !== "production") global.prisma = db;

