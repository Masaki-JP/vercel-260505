"use client"

import { memo, useState } from "react"

const Red = memo(
    function Child() {
        console.log("🟥 Red render")

        return <p className="">🟥</p>
    }
)

const Blue = function Child() {
    console.log("🟦 Blue render")

    return <p className="">🟦</p>
}

export default function Page() {
    const [bool, setBool] = useState(false)

    return <main className="flex flex-col text-6xl gap-8 items-center text-center mt-8">
        <Red />
        <Blue />
        
        <button onClick={() => setBool(!bool)} className={`w-80 h-24 ${bool ? "bg-blue-300" : "bg-pink-300"}`}>
            ボタン
        </button>
    </main>
}