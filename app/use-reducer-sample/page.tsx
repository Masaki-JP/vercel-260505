"use client"

import { useReducer } from "react"

type State = {
  count: number
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }

const initialState: State = {
  count: 0,
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return initialState
    default:
      return state
  }
}

export default function UseReducerSamplePage() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold">useReducer サンプル</h1>
        <p className="mt-3 text-slate-700">
          reducer に action を渡して、カウントの増減とリセットを行います。
        </p>
      </div>

      <section className="rounded-lg border border-slate-300 p-6">
        <p className="text-sm font-semibold text-slate-500">現在のカウント</p>
        <p className="mt-2 text-6xl font-bold">{state.count}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
            onClick={() => dispatch({ type: "increment" })}
          >
            +1
          </button>
          <button
            className="rounded bg-slate-700 px-4 py-2 font-semibold text-white hover:bg-slate-800"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -1
          </button>
          <button
            className="rounded border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-100"
            onClick={() => dispatch({ type: "reset" })}
          >
            リセット
          </button>
        </div>
      </section>
    </main>
  )
}
