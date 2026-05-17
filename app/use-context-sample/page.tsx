"use client"

import Child from "./_components/Child"
import { CountContext } from "./_lib/count-context"

export default function Page() {
  return (
    <CountContext.Provider value={0}>
      <main className="mt-16 flex flex-col items-center gap-16 text-5xl">
        <p>This is Parent page.</p>

        <Child />
      </main>
    </CountContext.Provider>
  )
}
