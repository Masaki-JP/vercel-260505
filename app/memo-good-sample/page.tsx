"use client"

import { memo, useCallback, useMemo, useState } from "react"

export default function Page() {
    console.log("🟥 Parent rendered")

    const [count, setCount] = useState(1)

    const increment = useCallback(() => {
        setCount((current) => current + 1)
    }, [])

    const fn = useCallback(() => {
        console.log("Child1 clicked")
    }, [])

    const obj = useMemo(() => {
        return { str: "abc" }
    }, [])

    return <main className="flex flex-col gap-8 text-5xl items-center mt-8">
        <p>Count: {count}</p>

        <button onClick={increment}>
            加算
        </button>

        {/* OK: useCallbackで同じ関数参照を使い回すため、memoの浅い比較で同じpropと判定される */}
        <Child1 fn={fn} />

        {/* OK: useMemoで同じオブジェクト参照を使い回すため、memoの浅い比較で同じpropと判定される */}
        <Child2 obj={obj} />
    </main>
}

const Child1 = memo(function Child1({ fn }: { fn: () => void }) {
    console.log("🟦 Child1 rendered", fn)

    return <button>Child1</button>
})

type Obj = { str: string }

const Child2 = memo(function Child2({ obj }: { obj: Obj }) {
    console.log("🟨 Child2 rendered", obj)

    return <p>Child2</p>
})
