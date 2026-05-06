"use client"

import { useState } from "react"

export default function Comp() {
    const [count, setCount] = useState(0)

    return <main className="flex flex-col space-y-16 items-center mt-8 text-6xl">        
        {/* JavaScriptとして評価 */}
        <p>{`カウントは現在${count} です。`}</p>
        
        {/* 文字列として評価 */}
        <p>`カウントは現在${count} です。`</p>

        <p>カウントは現在{count}です。</p>

        <button onClick={() => {
            setCount(count + 1)
        }}>1増やす</button>

        {/* 1しか増えない */}
        <button onClick={() => {
            setCount(count + 1)
            setCount(count + 1)
            setCount(count + 1)
        }}>3増やそうとしてるけど1しか増えない</button>

        {/* return忘れに注意 */}
        <button onClick={() => {
            setCount((prev) => {
                return prev + 1
            })
            setCount((prev) => {
                return prev + 1
            })
            setCount((prev) => {
                return prev + 1
            })
        }}>3増やす</button>

        <button onClick={() => {
            setCount(0)
        }}>リセット</button>
    </main>
}