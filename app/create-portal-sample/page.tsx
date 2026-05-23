'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function Page() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 p-8 text-center">
            <h1 className="text-3xl font-bold">createPortal サンプル</h1>

            <p className="text-gray-600">
                モーダル部分だけを、このページの外側にある document.body へ描画します。
            </p>

            <button
                className="rounded bg-blue-600 px-4 py-2 font-semibold text-white"
                onClick={() => {
                    setIsOpen(true)
                }}
                // form内に置かれてもsubmitボタンにならないようにします。
                type="button"
            >
                モーダルを開く
            </button>

            {isOpen && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div
                        aria-modal="true"
                        className="w-full max-w-sm rounded bg-white p-6 text-center shadow-lg"
                        role="dialog"
                    >
                        <h2 className="text-2xl font-bold">Portalで表示中</h2>

                        <p className="mt-3 text-gray-600">
                            この要素はReactツリー上ではPageの中ですが、DOM上ではbody直下に描画されています。
                        </p>

                        <button
                            className="mt-6 rounded bg-gray-900 px-4 py-2 font-semibold text-white"
                            onClick={() => {
                                setIsOpen(false)
                            }}
                            // form内に置かれてもsubmitボタンにならないようにします。
                            type="button"
                        >
                            閉じる
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </main>
    )
}
