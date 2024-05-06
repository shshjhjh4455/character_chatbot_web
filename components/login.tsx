"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "styles/home.module.css";

export default function Login() {
    const { data : session } = useSession();

    if (session && session.user) {
        return (
            <>
                <button
                    className={styles.link}
                    onClick={() => signOut()}
                >
                    {session.user.name}님 Log Out
                </button>
                <br />
                <div>
                    <a href="/chatbot">Start Chat With ChatBot!</a>
                </div>
            </>
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