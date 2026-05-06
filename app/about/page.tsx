import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-slate-700">これは About ページです。</p>

      <nav className="mt-8 flex gap-4">
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/"
        >
          ホームへ戻る
        </Link>
        <Link
          className="font-medium text-blue-700 underline underline-offset-4 hover:text-blue-900"
          href="/contact"
        >
          Contact へ移動
        </Link>
      </nav>
    </main>
  );
}
