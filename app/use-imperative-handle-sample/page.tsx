"use client"

import { useImperativeHandle, useRef, useState } from "react"
import type { Ref } from "react"

type TextInputHandle = {
  focus: () => void
  clear: () => void
}

type TextInputProps = {
  label: string
  ref: Ref<TextInputHandle>
}

function TextInput({ label, ref }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")

  // React 19ではforwardRefは不要です。refは通常のpropとして受け取れます。
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus()
      },
      clear() {
        setValue("")
        inputRef.current?.focus()
      },
    }
  }, [])

  return (
    <label className="flex w-full flex-col gap-2">
      <span className="font-semibold">{label}</span>
      <input
        ref={inputRef}
        className="rounded border border-slate-300 px-3 py-2"
        onChange={(event) => setValue(event.target.value)}
        placeholder="ここに入力"
        value={value}
      />
    </label>
  )
}

export default function Page() {
  const textInputRef = useRef<TextInputHandle>(null)

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold">
          useRef + useImperativeHandle サンプル
        </h1>
        <p className="mt-3 text-slate-700">
          親コンポーネントから子コンポーネントの input を操作します。
        </p>
      </div>

      <TextInput ref={textInputRef} label="子コンポーネントの input" />

      <div className="flex gap-3">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white"
          onClick={() => textInputRef.current?.focus()}
        >
          focus を呼ぶ
        </button>
        <button
          className="rounded bg-slate-700 px-4 py-2 font-semibold text-white"
          onClick={() => textInputRef.current?.clear()}
        >
          clear を呼ぶ
        </button>
      </div>

      <div className="rounded border border-slate-300 p-4 text-sm text-slate-700">
        <p>
          useRef は親が子コンポーネントの公開ハンドルを保持するために使います。
        </p>
        <p className="mt-2">
          useImperativeHandle は親へ公開する操作を focus と clear だけに絞っています。
        </p>
      </div>
    </main>
  )
}
