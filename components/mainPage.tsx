"use client"

import { usePathname, useRouter } from 'next/navigation'
import Animation from "../components/Animation"

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="text-gray-600 body-font">
      <div className="flex">
      </div>
      <Animation />
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">프로젝트 이름</h1>
          <p className="my-8 mb-12 leading-relaxed">영화 속 인물의 성격을 배경, 대사와 행동을 통해 분석하여 <br /> 이를 본따 만든 챗봇과 이야기를 나눌 수 있는 프로젝트이다.</p>
          <div className="flex w-full justify-center items-end">
            <button onClick={() => router.push("/chatbot")} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg">시작하기</button>
            <button onClick={() => router.push("/AboutUs")} className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg">설명</button>
          </div>
        </div>
      </div>
    </section>
  )
}