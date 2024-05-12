"use client"

import { usePathname } from 'next/navigation'
import Logo from '../components/logo'
import Login from "components/login";


export default function Navigation() {
  const pathname = usePathname()
  
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '1px solid #ccc',
  }


  return (
    <section>
      <nav style={style}>
        <div>
          <Logo />
        </div>
        <div>
          <Login />
        </div>
      </nav>
    </section>
  )
}