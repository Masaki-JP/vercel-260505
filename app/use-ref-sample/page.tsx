"use client"

import { useRef, useState } from "react"

// useRef：再描画の力はない。でも、再描画耐性はある。

function Comp1() {
    let count = 0

    return (
        <button onClick={() => {
            count += 1
            console.log("Comp1:", count)
        }}>
            Comp1 Button
        </button>
    )
}

function Comp2() {
    const countRef = useRef(0)

    return (
        <button onClick={() => {
            countRef.current += 1
            console.log("Comp2:", countRef.current)
        }}>
            Comp2 Button
        </button>
    )
}

export default function Page() {
    const [parentCount, setParentCount] = useState(0)

    return (
        <main className="flex flex-col gap-4 items-center mt-8 text-3xl">
            <p>親のカウント: {parentCount}</p>

            <button onClick={() => {
                setParentCount(parentCount + 1)
            }}>
                親を再レンダリング
            </button>

            <Comp1 />
            <Comp2 />
        </main>
    )
}