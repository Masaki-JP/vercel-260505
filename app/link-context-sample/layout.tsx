import Link from "next/link"
import type { ReactNode } from "react"
import { LinkCountProvider } from "./_lib/link-count-context"

const pages = [
  { href: "/link-context-sample/page-a", label: "ページA" },
  { href: "/link-context-sample/page-b", label: "ページB" },
  { href: "/link-context-sample/page-c", label: "ページC" },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LinkCountProvider>
      <main className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-12">
        <header>
          <h1 className="text-3xl font-bold">Link + useContext サンプル</h1>
          <nav className="mt-5 flex flex-wrap gap-4">
            {pages.map((page) => (
              <Link
                className="text-blue-700 underline underline-offset-4 hover:text-blue-900"
                href={page.href}
                key={page.href}
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}
      </main>
    </LinkCountProvider>
  )
}
