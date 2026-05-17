import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "画面遷移サンプル",
  description: "Next.js App Router の基本的な画面遷移サンプル",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
