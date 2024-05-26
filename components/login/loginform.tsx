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
            <p style={{color:"#000",fontSize:"20px"}}>SNS Login</p>
            <button style={{backgroundColor:"#94beb8",border: "1px solid #000", marginTop:"15px", width:"200px", height:"40px", borderRadius:"14px", marginBottom:"10px"}} onClick={() => signIn("google", { redirect: true, callbackUrl: '/' })}>Login with Google</button>
            <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"200px", height:"40px", borderRadius:"14px"}} onClick={() => signIn("kakao", { redirect: true, callbackUrl: '/' })}>Login with KakaoTalk</button>
            <br />
            <p style={{color:"#000",fontSize:"20px", marginTop:"15px"}}>Email Login</p>
            <br />
            {errorMsg && <h3 style={{ color: "red" }}>{errorMsg}</h3>}
            <form onSubmit={handleLogin} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                <button style={{backgroundColor:"#94beb8",border: "1px solid #000", marginTop:"15px", width:"180px", height:"40px", borderRadius:"14px"}}
                type="submit">Login</button>
            </form>
        </>
    );
}