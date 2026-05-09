"use client"

import { useEffect, useState } from 'react'

export default function UseEffectSample() {
    const [text, setText] = useState('abc')
    const [bool, setBool] = useState(true)

    // 初回表示、再レンダリング、stateの更新
    useEffect(() => {
        console.log("🟥")

        return () => {
            console.log("🟥 🟥")
        }
    })
    
    // 初回表示
    useEffect(() => {
        console.log("🟦")

        const timeoutId = window.setTimeout(() => {
            setText('ABC')
        }, 0)

        return () => {
            window.clearTimeout(timeoutId)
            console.log("🟦 🟦")
        }
    }, [])

    
    // stateの更新
    useEffect(() => {
        console.log("🟨")

        return () => {
            console.log("🟨 🟨")
        }
    }, [bool])

    return <main className="w-6xl mx-auto text-5xl flex flex-col space-y-8 items-center">
        <p className='txt bg-amber-300'>{text}</p>

        <HelloWorld />

        <button className='bg-amber-300' onClick={() => {
            setBool((prev) => prev ? false : true)            
        }}>{String(bool)}</button>
    </main>
}

function HelloWorld() {

    // 初回表示、再レンダリング
    useEffect(() => {
        console.log("🟩")

        return () => {
            console.log("🟩 🟩")
        }
    })

    return <p>Hello, world.</p>
}