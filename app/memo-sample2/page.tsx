"use client"

import { useState } from "react";
import Comp from "./Comp";

export default () => {
    const [count, setCount] = useState(1)

    console.log("🟥 Parent rendered")

    const str = (count % 7 === 0) ? "7の倍数です。" : "7の倍数ではありません。"

    return <main className="flex flex-col items-center text-5xl gap-8 mt-8">
        <p>Count: {count}</p>

        <Comp str={str} />

        <button onClick={() => {
            setCount(count + 1)
        }}>
            加算ボタン
        </button>
    </main>
}