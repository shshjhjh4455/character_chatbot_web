import Image from 'next/image'
import logo from '../public/images/logo.png'
import { usePathname, useRouter } from 'next/navigation'


export default function Logo() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <span>
      <Image
      src = {logo}
      alt="logo"
      width={85}
      height={62}
      priority
      onClick={() => router.push("/")}
      />
    </span>
  )
}