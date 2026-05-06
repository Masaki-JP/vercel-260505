"use client";

import { useState } from "react";

type Status = "stopped" | "running";

const statusLabels: Record<Status, string> = {
  stopped: "停止中",
  running: "実行中",
};

export function SimpleStateDemo() {
  const [status, setStatus] = useState<Status>("stopped");
  const nextStatus: Status = status === "stopped" ? "running" : "stopped";

  return (
    <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">現在の状態</p>
      <p className="mt-2 text-3xl font-bold">{statusLabels[status]}</p>

      <button
        className="mt-6 rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-900"
        onClick={() => setStatus(nextStatus)}
        type="button"
      >
        {statusLabels[nextStatus]}にする
      </button>
    </section>
  );
}
