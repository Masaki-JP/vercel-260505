"use server"

import { redirect } from "next/navigation"

export async function submitName(formData: FormData) {
  const name = formData.get("name")

  if (typeof name !== "string" || name.trim().length < 2) {
    redirect("/redirect-sample/error")
  }

  if (name.toLowerCase().includes("admin")) {
    redirect("/redirect-sample/error")
  }

  redirect("/redirect-sample/success")
}
