"use client";

import { useMemo, useState } from "react";

function heavyCalculation(a: number, b: number, c: number) {
  let result = 0

  for (let i = 0; i < 15_000_000; i += 1) {
    result += (a * b + c + i) % 10
  }

  console.log("計算完了")

  return result
}

export default function Page() {
  const [bool, setBool] = useState(true)

  return <main className="flex flex-col items-center mt-8 text-6xl gap-8">
    <button
      className={`p-8 text-white font-semibold rounded-4xl ${bool ? "bg-pink-400" : "bg-blue-400"}`}
      onClick={() => setBool(!bool)}>
        再描画ボタン
    </button>

    <div className="flex text-center">
      <Comp1 />
      {/* <Comp2 /> */}
    </div>

    <p>Comp1はuseMemoを使っているので、再描画の際に再度計算が走らない。Comp2に切り替えるとこうはいかない。</p>
  </main>
}

function Comp1() {

  // 依存配列は空なので最初の1回だけ計算が行われる。
  const result = useMemo(() => {
    return heavyCalculation(8594325483, 2537289867, 7519716732).toString()
  }, [])

  return <p className="w-xl bg-yellow-300">
    {result}(Comp1)
  </p>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- useMemoなしの比較用として、切り替えて試せるように残しています。
function Comp2() {
  const result = heavyCalculation(8594325483, 2537289867, 7519716732).toString()

  return <p className="w-xl bg-green-300">
    {result}(Comp2)
  </p>
}
