import Link from "next/link";

const pages = [
  { href: "/mypage", label: "MyPage" },
  { href: "/router-sample", label: "useRouter サンプル" },
  { href: "/state-sample", label: "状態遷移サンプル" },
  { href: "/simple-state-sample", label: "簡単な状態遷移サンプル" },
  { href: "/redirect-sample", label: "redirect サンプル" },
  { href: "/practice", label: "Practice" },
  { href: "/api/user", label: "API(user)" },
  { href: "use-effect-sample", label: "useEffectサンプル" },
  { href: "local-storage-sample", label: "localStorageサンプル" },
  { href: "sqlite-prisma-sample", label: "SQLite & Prisma" },
  { href: "use-ref-sample", label: "useRefサンプル" },
  { href: "use-memo-sample", label: "useMemoサンプル" },
  { href: "memo-sample", label: "memoサンプル" },
  { href: "memo-sample2", label: "memoサンプル2" },
  { href: "memo-bad-sample", label: "memoサンプル（悪い例）" },
  { href: "memo-good-sample", label: "memoサンプル（良い例）" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-bold">ページ一覧</h1>

      <ul className="mt-6 list-disc space-y-3 pl-6">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
              href={page.href}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
