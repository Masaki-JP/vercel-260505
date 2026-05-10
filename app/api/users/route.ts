import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3"
import { PrismaClient } from "@/app/generated/prisma/client"

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
})
const prisma = new PrismaClient({ adapter })

// Read: 全ユーザーを取得
export async function GET() {
  const users = await prisma.user.findMany()

  return Response.json(users)
}

// Create: ユーザーを作成
export async function POST(request: Request) {
  const body = await request.json()

  const user = await prisma.user.create({
    data: {
      name: body.name,
    },
  })

  return Response.json(user)
}

// Update: ユーザーを更新
export async function PUT(request: Request) {
  const body = await request.json()

  const user = await prisma.user.update({
    where: {
      id: body.id,
    },
    data: {
      name: body.name,
    },
  })

  return Response.json(user)
}

// Delete: ユーザーを削除
export async function DELETE(request: Request) {
  const body = await request.json()

  const user = await prisma.user.delete({
    where: {
      id: body.id,
    },
  })

  return Response.json(user)
}
