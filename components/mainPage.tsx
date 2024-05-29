"use client"

import { usePathname, useRouter } from 'next/navigation'
import Animation from "components/Animation"

export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full flex justify-center mb-10">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Animation />
          </div>
        </div>
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col mb-16 items-center text-center">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-3xl drop-shadow-lg">
                영화 속 캐릭터와 대화
              </h1>
              <p className="my-8 mb-12 leading-relaxed text-xl text-gray-600 drop-shadow-md">
                우리의 프로젝트는 영화 속 캐릭터와 친구처럼 대화하는 서비스입니다.
              </p>
            </div>
            <div className="flex w-full justify-center items-end mb-12">
              <button
                onClick={() => router.push("/chatbot")}
                className="inline-flex text-white bg-main-color border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg transition-transform transform hover:scale-105"
              >
                시작하기
              </button>
              <button
                onClick={() => router.push("/aboutus")}
                className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg transition-transform transform hover:scale-105"
              >
                설명
              </button>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white bg-opacity-75 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <svg className="block w-8 h-8 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <a className="inline-flex items-center mb-6">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font text-2xl text-gray-900">차별점</span>
                    </span>
                  </a>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    영화의 시나리오를 기반으로 만들어진 캐릭터이기 때문에 감정, 생각, 스토리 등을 기반으로 대화 한다는 점에서 ChatGPT와 차별화 됩니다.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-white bg-opacity-75 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <svg className="block w-8 h-8 text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <a className="inline-flex items-center mb-6">
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font text-2xl text-gray-900">특별한 경험</span>
                    </span>
                  </a>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    사용자가 단순히 시청하는 것을 넘어서, 참여하고 소통하며 계속 연결되는 경험을 느낄 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
