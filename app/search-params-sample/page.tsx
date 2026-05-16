import Link from "next/link"

type SearchParams = Promise<{
  color?: string | string[]
}>

const colors = {
  red: {
    label: "赤",
    className: "bg-red-500 text-white",
    message: "赤が選ばれました。",
  },
  blue: {
    label: "青",
    className: "bg-blue-500 text-white",
    message: "青が選ばれました。",
  },
  green: {
    label: "緑",
    className: "bg-green-500 text-white",
    message: "緑が選ばれました。",
  },
} as const

// colors のキーだけを使える型にする
type ColorKey = keyof typeof colors

function firstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

function isColorKey(value: string | undefined): value is ColorKey {
  return value === "red" || value === "blue" || value === "green"
}

export default async function SearchParamsSamplePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams
  const colorParam = firstValue(params.color)
  const selectedColor = isColorKey(colorParam) ? colorParam : undefined

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="mt-8 text-3xl font-bold">searchParams サンプル</h1>
      <p className="mt-4 text-slate-700">
        ボタンを押すと URL の color が変更されます。
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {/* colors を配列にして、色ボタンをまとめて作る */}
        {Object.entries(colors).map(([key, color]) => (
          <Link
            className={`rounded-lg px-5 py-4 text-center text-xl font-bold shadow-sm ${color.className}`}
            href={`/search-params-sample?color=${key}`}
            key={key}
          >
            {color.label}
          </Link>
        ))}
      </div>

      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">
          searchParams.color
        </p>
        <p className="mt-3 text-3xl font-bold">
          {selectedColor ? colors[selectedColor].message : "未選択"}
        </p>
      </section>
    </main>
  )
}
