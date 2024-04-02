"use client";

import { signIn } from 'next-auth/react';
import { handleLogin, handleForgot, handleEmail } from 'app/utils/login/handle';

export default function LoginPage() {
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
            <form onSubmit={handleEmail}>
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