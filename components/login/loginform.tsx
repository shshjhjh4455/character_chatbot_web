"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function LoginForm({ errorMsg }) {

    // Sign in with email and password = credentialsprovider. Redirects to home page.
    const handleLogin = async(event: FormEvent<HTMLFormElement>) => {
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
            <h3>SNS Login!!</h3>
            <button onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}>Login with Google</button><br />
            <button onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}>Login with KakaoTalk</button>
            <hr/>
            <h3>or Email Login</h3>
            {errorMsg && <h3 style={{ color: "red" }}>{errorMsg}</h3>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                /><br />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                /><br />
                <button type="submit">Login</button>
            </form>
        </>
    );
}