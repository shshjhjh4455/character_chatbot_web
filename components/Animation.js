import React from 'react'
import dynamic from 'next/dynamic'
import lottieJson from "../public/images/lottie.json"

const DynamicLottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export default function Animation() {
    return (
        <DynamicLottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 600, height: 400 }}
        />
    )
}