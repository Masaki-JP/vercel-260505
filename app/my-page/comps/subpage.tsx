"use client"

import type { SubmitEvent } from "react"
import { useUserContext } from "../lib/context"

export const SubPage = () => {
    const { user, setUser } = useUserContext()

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = String(formData.get("name") ?? "").trim()
        const age = Number(formData.get("age"))

        setUser({
            name,
            age: Number.isFinite(age) ? age : 0,
        })
    }

    return <div className="space-y-4">
        <p>Name: {user?.name ?? "未設定"}</p>
        <p>Age: {user?.age ?? "未設定"}</p>

        <form onSubmit={handleSubmit} className="max-w-sm space-y-3">
            <label className="block space-y-1">
                <span className="block text-sm font-medium">名前</span>
                <input
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    required
                    className="block w-full rounded-sm border px-2 py-1"
                />
            </label>

            <label className="block space-y-1">
                <span className="block text-sm font-medium">年齢</span>
                <input
                    type="number"
                    name="age"
                    defaultValue={user.age}
                    min="0"
                    required
                    className="block w-full rounded-sm border px-2 py-1"
                />
            </label>

            <button type="submit" className="rounded-sm border px-3 py-1">
                更新
            </button>
        </form>
    </div>
}
