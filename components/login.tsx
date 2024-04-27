"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "styles/home.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
    const { data : session } = useSession();
    const router = useRouter();

    if (session && session.user) {
        return (
            <div>
        <button onClick={() => signOut()}>
          {session.user.name}님 Log Out
        </button>
      </div>
           
        );
    }

    return (
        <button
            className={styles.link}
            onClick={() => signIn()}
        >
            LogIn
        </button>
    );
}