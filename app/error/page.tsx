import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">エラーページ</h1>
      <p className="mt-4 text-slate-700">
        useRouter サンプルのボタンで、10% の確率に当たったときに表示されるページです。
      </p>

      <nav className="mt-8 flex flex-wrap gap-4">
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/router-sample"
        >
          サンプルへ戻る
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/"
        >
          ホームへ戻る
        </Link>
      </nav>
    </main>
  );
}
