"use client"

import {usePathname, useRouter} from 'next/navigation'

export default function TryIt() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
    <button onClick={() => router.push("/chatbot")}>시작하기</button>
    </>
  )
}