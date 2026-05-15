"use client"

import { useLinkCount } from "../_lib/link-count-context"

export default function CounterPanel({ title }: { title: string }) {
  const { count, increment } = useLinkCount()

  return (
    <section className="rounded-lg border border-slate-300 bg-white p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-4 text-4xl font-bold">{count}</p>
      <button
        className="mt-5 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
        onClick={increment}
      >
        カウントを増やす
      </button>
    </section>
  )
}
