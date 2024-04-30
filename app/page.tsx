
'use client'
import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
export default function Home() {
    return (
        <div className={styles.div}>
            <h1>Character Chatbot</h1>
            <p>Please log in to continue.</p>
            <Login />
            
            <Link href="https://github.com/shshjhjh4455/character_chatbot_web">
                <Image src="/github-mark.svg" alt="GitHub Mark" width={48} height={48} />
            </Link>
        </div>
    );
}










/*
import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
import { signIn } from 'next-auth/react'; // next-auth의 signIn 함수 import
import { useRouter } from 'next/router'; // next/router import
import { useEffect } from 'react'; // useEffect import
import { useSession } from 'next-auth/react'; // next-auth의 useSession 함수 import


export default function Home() {
 
  return (
    <div className={styles.div}>
      <h1>Character Chatbot</h1>
      <p>Please log in to continue.</p>
      <Login />
       
      <Link href="https://github.com/shshjhjh4455/character_chatbot_web">
        <Image src="/github-mark.svg" alt="GitHub Mark" width={48} height={48} />
      </Link> 
      
    </div>
 
  );
}
*/
/*
import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
import { signIn } from 'next-auth/react'; // next-auth의 signIn 함수 import
import { useRouter } from 'next/router'; // next/router import
import { useEffect } from 'react'; // useEffect import
import { useSession } from 'next-auth/react'; // next-auth의 useSession 함수 import
*/

