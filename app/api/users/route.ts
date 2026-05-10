import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "@/app/generated/prisma/client"

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
})
const prisma = new PrismaClient({ adapter })

export async function POST() {
  const user = await prisma.user.create({
    data: {
      name: "Naruto",
    },
  })

  return Response.json(user)
}
