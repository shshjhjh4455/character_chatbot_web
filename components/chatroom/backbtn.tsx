"use client"

import { usePathname, useRouter } from 'next/navigation'

export default function Backbtn() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <>
    <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"60px", height:"40px",borderRadius:"14px"}} type="submit" onClick={router.back}>back</button>   
    </>
  )
}