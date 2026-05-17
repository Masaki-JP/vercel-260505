import { SimpleStateDemo } from "./simple-state-demo"

export default function SimpleStateSamplePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">簡単な状態遷移サンプル</h1>
      <p className="mt-4 text-slate-700">
        停止中と実行中の 2 つの状態を、1 つのボタンで切り替えます。
      </p>

      <SimpleStateDemo />
    </main>
  )
}
