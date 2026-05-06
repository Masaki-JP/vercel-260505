import Link from "next/link";
import { NavigationButton } from "./navigation-button";

export default function RouterSamplePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold">useRouter サンプル</h1>
      <p className="mt-4 text-slate-700">
        ボタンを押すと、90% の確率で About ページへ移動します。10% の確率でエラーページへ移動します。
      </p>

      <div className="mt-8">
        <NavigationButton />
      </div>

      <nav className="mt-8 flex flex-wrap gap-4">
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
