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
            <h3 style={{marginTop:"30px" }}>SNS Login!!</h3>
            <button style={{backgroundColor:"#94beb8",border: "1px solid #000", marginTop:"15px", width:"200px", height:"40px", borderRadius:"14px"}} onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}>Login with Google</button><br />
            <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"200px", height:"40px", borderRadius:"14px"}} onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}>Login with KakaoTalk</button>
            <hr/>
            <h3 style={{marginTop:"30px" }}>or Email Login</h3>
            {errorMsg && <h3 style={{ color: "red" }}>{errorMsg}</h3>}
            <form onSubmit={handleLogin}>
                <input
                    style={{border:"1px solid #000",marginTop:"5px"}}
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                /><br />
                <input
                    style={{border:"1px solid #000",marginTop:"5px"}}
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                /><br />
                <button style={{backgroundColor:"#94beb8",border: "1px solid #000", marginTop:"15px", width:"180px", height:"40px", borderRadius:"14px"}}
                type="submit">Login</button>
            </form>
        </>
    );
}