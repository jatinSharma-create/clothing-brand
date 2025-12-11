// lib/prismadb.ts

import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
})

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb

export default prismadb
