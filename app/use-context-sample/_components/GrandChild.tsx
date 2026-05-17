"use client"

import { useContext } from "react"
import { CountContext } from "../_lib/count-context"

export default function GrandChild() {
  const count = useContext(CountContext)

  return <p>This is GrandChild page. (count: {count})</p>
}
