import Link from "next/link";
import { submitName } from "./actions";

export default function RedirectSamplePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">redirect サンプル</h1>
      <p className="mt-4 text-slate-700">
        名前を入力して送信します。2文字未満、または admin を含む入力の場合は、Server Action の redirect でエラーページへ移動します。
      </p>

      <form action={submitName} className="mt-8 space-y-4">
        <div>
          <label className="block font-medium" htmlFor="name">
            名前
          </label>
          <input
            className="mt-2 w-full rounded border border-slate-300 px-3 py-2"
            id="name"
            name="name"
            placeholder="例: Taro"
            type="text"
          />
        </div>

        <button
          className="rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-900"
          type="submit"
        >
          送信する
        </button>
      </form>
    </main>
  );
}
