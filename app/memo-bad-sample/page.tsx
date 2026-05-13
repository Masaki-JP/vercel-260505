"use client"

import { memo, useState } from "react"

export default () => {
    console.log("🟥 Parent rendered")

    const [count, setCount] = useState(1)

    return <main className="flex flex-col gap-8 text-5xl items-center mt-8">
        <p>Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>
            加算
        </button>

        {/* NG: 親の再レンダーごとに新しい関数が作られるため、memoの浅い比較では毎回別propになる */}
        <Child1 fn={() => {}} />

        {/* NG: オブジェクトリテラルも毎回新しい参照になるため、中身が同じでもmemoは再レンダーを止められない */}
        <Child2 obj={{ str: "abc" }} />
    </main>
}

const Child1 = memo(({ fn }: { fn: () => void }) => {
    console.log("🟦 Child1 rendered")

    return <p>Child1</p>
})

type Obj = { str: string }

const Child2 = memo(({ obj }: { obj: Obj }) => {
    console.log("🟨 Child2 rendered")

    return <p>Child2</p>
})
