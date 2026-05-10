"use client"

export default function Page() {
  const handleClick = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
    })

    const user = await response.json()

    console.log(user)
  }

  return (
    <main className="p-8">
      <button
        onClick={handleClick}
        className="border px-4 py-2 rounded"
      >
        User Create
      </button>
    </main>
  )
}