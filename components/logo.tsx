import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function Logo() {
  return (
    <span>
      <Image
      src = {logo}
      alt="logo"
      width={65}
      height={52}
      priority
      />
    </span>
  )
}