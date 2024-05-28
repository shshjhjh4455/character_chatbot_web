import React from 'react'
import dynamic from 'next/dynamic'
import lottieJson from "../public/images/lottie.json"

const DynamicLottie = dynamic(() => import('react-lottie-player'), { ssr: false })

export default function Animation() {
    const style = {
        width: '100%',
        height: '100%',
        maxWidth: '600px',
        maxHeight: '400px',
    }

    return (
        <DynamicLottie
            loop
            animationData={lottieJson}
            play
            style={style}
        />
    )
}