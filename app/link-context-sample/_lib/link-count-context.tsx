"use client"

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type LinkCountContextValue = {
  count: number
  increment: () => void
}

const LinkCountContext = createContext<LinkCountContextValue | null>(null)

export function LinkCountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  const value = useMemo(
    () => ({
      count,
      increment: () => setCount((currentCount) => currentCount + 1),
    }),
    [count],
  )

  return (
    <LinkCountContext.Provider value={value}>
      {children}
    </LinkCountContext.Provider>
  )
}

export function useLinkCount() {
  const context = useContext(LinkCountContext)

  if (context === null) {
    throw new Error("useLinkCount must be used within LinkCountProvider.")
  }

  return context
}
