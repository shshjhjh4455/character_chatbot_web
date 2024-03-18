"use client";

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';

export default function LoginPage() {
    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const pw = formData.get('password');

        const result = await signIn('credentials', {
            username: email,
            password: pw,
            redirect: true,
            callbackUrl: "/",
        });
    };

    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('signup-email');

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        console.log(JSON.stringify({ email }));

        if (response.ok) {
            console.log('Email sent successfully');
            formData.delete('signup-email');
        } else {
            console.log('Failed to send email');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <hr />
            <button onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}>Login with Google</button>
            <button onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}>Login with KakaoTalk</button>
            <br /><br /><hr /><br /><br />
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    placeholder="Email"
                    name="signup-email"
                    required
                />
                <button type="submit">Send Sign Up Link</button>
            </form>
        </div>
    );
};