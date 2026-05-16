import { SubPage } from "./comps/subpage";
import { UserContextProvider } from "./lib/context";

export default function MyPage() {
  return (
    <UserContextProvider>
      <main className="mx-auto max-w-2xl px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold">MyPage</h1>
        <SubPage />
      </main>
    </UserContextProvider>
  )
}
