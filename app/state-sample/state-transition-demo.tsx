"use client";

import { useState } from "react";

/**
 * 状態遷移サンプルで扱う状態の識別子です。
 */
type StateId = "draft" | "review" | "approved" | "rejected";

/**
 * ある状態から別の状態へ移るための遷移定義です。
 */
type Transition = {
  label: string;
  to: StateId;
};

/**
 * 各状態に対応する表示名と説明文です。
 */
const states: Record<StateId, { label: string; description: string }> = {
  draft: {
    label: "下書き",
    description: "内容を作成している状態です。",
  },
  review: {
    label: "レビュー中",
    description: "担当者が内容を確認している状態です。",
  },
  approved: {
    label: "承認済み",
    description: "内容が承認され、完了した状態です。",
  },
  rejected: {
    label: "差し戻し",
    description: "修正が必要になった状態です。",
  },
};

/**
 * 現在の状態ごとに、次に選択できる遷移を定義します。
 */
const transitions: Record<StateId, Transition[]> = {
  draft: [{ label: "レビューへ進める", to: "review" }],
  review: [
    { label: "承認する", to: "approved" },
    { label: "差し戻す", to: "rejected" },
  ],
  approved: [{ label: "最初からやり直す", to: "draft" }],
  rejected: [{ label: "修正して再提出", to: "draft" }],
};

/**
 * ボタン操作で状態を切り替え、現在の状態と遷移履歴を表示するデモです。
 */
export function StateTransitionDemo() {
  const [currentState, setCurrentState] = useState<StateId>("draft");
  const [history, setHistory] = useState<StateId[]>(["draft"]);
  const availableTransitions = transitions[currentState];

  /**
   * 指定された次の状態へ遷移し、履歴にも追加します。
   */
  function moveTo(nextState: StateId) {
    setCurrentState(nextState);
    setHistory((previousHistory) => [...previousHistory, nextState]);
  }

  /**
   * 現在の状態と履歴を初期状態に戻します。
   */
  function reset() {
    setCurrentState("draft");
    setHistory(["draft"]);
  }

  return (
    <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">現在の状態</p>
          <h2 className="mt-1 text-2xl font-bold">
            {states[currentState].label}
          </h2>
          <p className="mt-2 text-slate-700">
            {states[currentState].description}
          </p>
        </div>
        <button
          className="rounded border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100"
          onClick={reset}
          type="button"
        >
          リセット
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-bold text-slate-600">次にできる遷移</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {availableTransitions.map((transition) => (
            <button
              className="rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-900"
              key={`${currentState}-${transition.to}`}
              onClick={() => moveTo(transition.to)}
              type="button"
            >
              {transition.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-bold text-slate-600">遷移履歴</h3>
        <ol className="mt-3 flex flex-wrap items-center gap-2">
          {history.map((state, index) => (
            <li className="flex items-center gap-2" key={`${state}-${index}`}>
              {index > 0 && <span className="text-slate-400">→</span>}
              <span
                className={
                  state === currentState && index === history.length - 1
                    ? "rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                    : "rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                }
              >
                {states[state].label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
