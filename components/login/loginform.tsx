"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function LoginForm({ errorMsg }) {

    // Sign in with email and password = credentialsprovider. Redirects to home page.
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const pw = formData.get('password');

        await signIn('credentials', {
            username: email,
            password: pw,
            redirect: true,
            callbackUrl: "/",
        });
    };

    return (
        <>
            <p className="text-black text-xl mt-3 mb-2">SNS Login</p>
            <button
                className="bg-[#94beb8] border border-black mt-4 w-52 h-10 mb-2"
                style={{ borderRadius: '14px' }}
                onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}
            >
                Login with Google
            </button>
            <button
                className="bg-[#94beb8] border border-black w-52 h-10"
                style={{ borderRadius: '14px' }}
                onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}
            >
                Login with KakaoTalk
            </button>
            <p className="text-black text-xl mt-6">Email Login</p>
            {errorMsg && <h3 className="text-red-500">{errorMsg}</h3>}
            <form onSubmit={handleLogin} className="flex flex-col items-center mt-4">
                <input
                    className="border border-black w-64 h-10 p-2 mb-2"
                    style={{ borderRadius: '14px' }}
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <input
                    className="border border-black w-64 h-10 p-2 mb-2"
                    style={{ borderRadius: '14px' }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <button
                    className="bg-[#94beb8] border border-black mt-4 w-44 h-10"
                    style={{ borderRadius: '14px' }}
                    type="submit"
                >
                    Login
                </button>
            </form>
        </>
    );
}