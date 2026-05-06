import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">ホーム</h1>
      <p className="mt-4 text-slate-700">
        リンクをクリックすると別の画面へ移動します。
      </p>

      <nav className="mt-8 flex flex-wrap gap-4">
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/mypage"
        >
          MyPage へ移動
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/router-sample"
        >
          useRouter サンプルへ移動
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/state-sample"
        >
          状態遷移サンプルへ移動
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/simple-state-sample"
        >
          簡単な状態遷移サンプルへ移動
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/redirect-sample"
        >
          redirect サンプルへ移動
        </Link>
      </nav>
    </main>
  );
}
