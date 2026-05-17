import Link from "next/link"

export default function RedirectSampleErrorPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold text-red-700">入力エラー</h1>
      <p className="mt-4 text-slate-700">
        おかしな入力だったため、redirect でこのページへ移動しました。
      </p>

      <Link
        className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900 mt-2 inline-block"
        href="/"
      >
        ホームへ戻る
      </Link>
    </main>
  )
}
