"use client";

import { useRef } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
    const emailRef = useRef(null);
    const pwRef = useRef(null);

    const handleLogin = async () => {
        const result = await signIn('credentials', {
            redirect: true,
            callbackUrl: '/',
            username : emailRef.current,
            password : pwRef.current,
        });

        if (result.error) {
            console.log(result.error);
        } else {
            console.log(result);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                />
                <input
                    type="password"
                    placeholder="Password"
                    ref={pwRef}
                />
                <button type="submit">Login</button>
            </form>
            <hr/>
            <button onClick={() => signIn("google", { redirect : true, callbackUrl : '/' })}>Login with Google</button>
            <br/><br/><br/>
            <Link href="/signup">Create an account free!</Link>
        </div>
    );
};