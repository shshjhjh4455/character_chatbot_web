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
        const json = await response.json();
        if (json.status === 200) {
            console.log('Email sent');
            formData.delete('signup-email');
        } else {
            formData.delete('signup-email');
            console.log('Failed to send email');
        }
    };

    const handleForgot = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('forgot-password');

        const response = await fetch('/api/contact/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        const json = await response.json();
        if (json.status === 200) {
            console.log('Email sent');
            formData.delete('forgot-password');
        } else {
            formData.delete('forgot-password');
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
            <form onSubmit={handleForgot}>
                <input
                    type="email"
                    placeholder="Reset Password Email"
                    name="forgot-password"
                    required
                />
                <button type="submit">Send Email to reset Password!</button>
            </form>
            <hr />
            <button onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}>Login with Google</button>
            <button onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}>Login with KakaoTalk</button>
            <hr/>
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