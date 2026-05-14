"use client";

import { memo, useCallback, useState } from "react";

type ChildProps = { count: number; onClick: () => void };

const Child = memo(function Child({
  count,
  onClick,
}: ChildProps) {
  console.log("Child が再描画されました");

  return (
    <div className="rounded-lg border border-slate-300 p-6">
      <p className="text-2xl font-bold">カウント: {count}</p>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={onClick}
      >
        カウントを増やす
      </button>
    </div>
  );
});

export default function Page() {
  console.log("🟥 Parent rendered");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-12">
      <div>
        <h1 className="text-3xl font-bold">useCallback サンプル</h1>
        <p className="mt-3 text-slate-700">
          入力欄を変更すると親は再描画されますが、子に渡す関数は
          useCallback で同じ参照に保たれます。
        </p>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-semibold">親コンポーネントの state</span>
        <input
          className="rounded border border-slate-300 px-3 py-2"
          onChange={(event) => setText(event.target.value)}
          placeholder="ここに入力"
          value={text}
        />
      </label>

      <Child count={count} onClick={increment} />
    </main>
  );
}
