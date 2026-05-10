"use client"

import { useState } from "react"

type User = {
  id: number
  name: string
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState("")
  const [editId, setEditId] = useState<number | null>(null)
  const [message, setMessage] = useState("")

  const getUsers = async () => {
    const response: Response = await fetch("/api/users")
    const data: any = await response.json()

    setUsers(data)
  }

  const createUser = async () => {
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    })

    setName("")
    setMessage("ユーザーを作成しました")
    getUsers()
  }

  const updateUser = async () => {
    if (editId === null) {
      return
    }

    await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editId,
        name,
      }),
    })

    setEditId(null)
    setName("")
    setMessage("ユーザーを更新しました")
    getUsers()
  }

  const deleteUser = async (id: number) => {
    await fetch("/api/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })

    setMessage("ユーザーを削除しました")
    getUsers()
  }

  const startEdit = (user: User) => {
    setEditId(user.id)
    setName(user.name)
    setMessage("")
  }

  const cancelEdit = () => {
    setEditId(null)
    setName("")
    setMessage("")
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-2xl font-bold">SQLite Prisma Sample</h1>

      <button
        onClick={getUsers}
        className="mb-4 rounded border px-4 py-2"
      >
        一覧取得
      </button>

      <div className="mb-6 flex gap-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="名前を入力"
          className="flex-1 rounded border px-3 py-2"
        />

        {editId === null ? (
          <button
            onClick={createUser}
            className="rounded bg-black px-4 py-2 text-white"
          >
            作成
          </button>
        ) : (
          <>
            <button
              onClick={updateUser}
              className="rounded bg-black px-4 py-2 text-white"
            >
              更新
            </button>
            <button
              onClick={cancelEdit}
              className="rounded border px-4 py-2"
            >
              キャンセル
            </button>
          </>
        )}
      </div>

      {message && <p className="mb-4 text-sm text-green-700">{message}</p>}

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between rounded border p-3"
          >
            <span>
              {user.id}: {user.name}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => startEdit(user)}
                className="rounded border px-3 py-1"
              >
                編集
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="rounded border px-3 py-1 text-red-600"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
