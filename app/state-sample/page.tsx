import { StateTransitionDemo } from "./state-transition-demo";

export default function StateSamplePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">状態遷移サンプル</h1>
      <p className="mt-4 text-slate-700">
        下書き、レビュー中、承認済み、差し戻しの 4
        つの状態をボタンで切り替える簡単なサンプルです。
      </p>

      <StateTransitionDemo />
    </main>
  );
}
