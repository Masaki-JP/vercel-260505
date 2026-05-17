import Link from "next/link"

const pages: { href: string, label: string }[] = [
    { href: "/practice/useState1", label: "useState1" },
    { href: "/practice/useState2", label: "useState2" }
]

export default function PracticeList() {
  return  <main className="mx-auto max-w-xl px-6 py-12">
    <ul className="mt-6 list-disc space-y-3 pl-6">
        {pages.map((page) => {
            return <li key={page.href}>
                <Link href={page.href} className="text-blue-700 underline underline-offset-4 hover:text-blue-900">{page.label}</Link>
            </li>
        })}
    </ul>
  </main>
}
