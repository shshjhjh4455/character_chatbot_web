"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
    const { data : session } = useSession();

    if (session && session.user) {
        return (
            <>
                <button
                    className="inline-flex text-black bg-main-color border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                    onClick={() => signOut()}
                >
                    {session.user.name}님 Log Out
                </button>
                <br />
            </>
        );
    }

    return (
        <button
        className="inline-flex text-black bg-main-color border-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            onClick={() => signIn()}
        >
            LogIn
        </button>
    );
}