"use client"

import { useState } from "react"

export default function UseState2() {
    const [person, setPerson] = useState({
        name: "Naruto",
        age: 15
    })

    return <main className="max-w-5xl mx-auto text-7xl mt-8 flex flex-col items-center space-y-8">
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>

        <button onClick={() => {
            setPerson((pre) => {
                return {
                ...person,
                age: pre.age + 1
            }
            })
        }}>
            年齢を１加算
        </button>

        <button onClick={() => {
            setPerson((pre) => {
                pre.age++
                return pre
            })
        }}>
            年齢を１加算<br />（実際に加算されるが再描画されない）
        </button>
    </main>
}