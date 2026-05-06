"use client";

import { useRouter } from "next/navigation";

export function NavigationButton() {
  const router = useRouter();

  function handleClick() {
    const shouldRedirectToError = Math.random() < 0.1;

    if (shouldRedirectToError) {
      router.push("/error");
      return;
    }

    router.push("/about");
  }

  return (
    <button
      className="rounded bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-900"
      onClick={handleClick}
      type="button"
    >
      ボタンで画面遷移する
    </button>
  );
}
