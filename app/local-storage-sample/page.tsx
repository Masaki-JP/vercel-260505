"use client"

import { useEffect, useState } from "react"

export default function LocalStorageSample() {
    return <main className="flex flex-col items-center text-5xl mt-8 space-y-8">
        <Count />

        <hr className="w-200 border-t border-gray-500" />

        <Name />
    </main>
}

function Count() {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        const count: string | null = localStorage.getItem("count")

        if (count !== null) {
            setCount(Number(count))
        }
    }, [])

    useEffect(() => {
        if (count !== null) {
          localStorage.setItem("count", count.toString())
        }
    }, [count])

    return <>
        <p>{`count is ${count}.`}</p>

        <button onClick={() => {
            if (count !== null) {
                setCount(count + 1)
            }
        }}>プラス１</button>

        <button onClick={() => {
            if (count !== null) {
                setCount(count - 1)
            }
        }}>マイナス１</button>

        <button onClick={() => {
            setCount(0)
        }}>リセット</button>
    </>
}

function Name() {
    const [name, setName] = useState<string | null>(null)
    const hasSavedName = name !== null && name !== ""

    useEffect(() => {
        const name: string | null = localStorage.getItem("name")

        setName(name)
    }, [])

    return <>
        <form
            className="flex flex-col items-center gap-4 text-base"
            onSubmit={(event) => {
                event.preventDefault()

                const formData = new FormData(event.currentTarget)
                const name = formData.get("name")?.toString() ?? ""

                localStorage.setItem("name", name)
                setName(name)
                event.currentTarget.reset()
            }}
        >
            <label className="flex flex-col gap-2">
                名前
                <input
                    className="border border-gray-400 px-3 py-2"
                    name="name"
                    type="text"
                />
            </label>

            <button type="submit" className="border px-2 py-1 rounded-lg bg-blue-500 font-semibold text-white">保存</button>

            <p>
                {hasSavedName
                    ? `保存されている名前は「${name}」です。`
                    : "名前はまだ保存されていません。"}
            </p>
        </form>
    </>
}

/*
*/
