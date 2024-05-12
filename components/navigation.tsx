"use client"

import {usePathname} from 'next/navigation'
import Logo from '../components/logo'
import Login from "components/login";


export default function Navigation() {
  const pathname = usePathname()
  
  return(
    <section>
    <div>
    <Logo/>
    </div>
    <div>
    <Login/>
    </div>   
    </section> 
  )
}