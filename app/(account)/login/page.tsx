"use client";

import ForgotForm from 'components/login/forgotform';
import LoginForm from 'components/login/loginform';
import SignupForm from 'components/login/signupform';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
    const [isForgot, setIsForgot] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const errorMsg = useSearchParams().get("error");

    const session = useSession();

    //Already Logged in
    if (session.data) {
        window.location.href = "/";
    }

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={{ ...style, flexDirection : "column" }}>
            <h1>Login Page!!</h1>
            {!isForgot && !isSignup && <>
                {errorMsg && <h3 style={{ color: "red" }}>{errorMsg}</h3>}
                <LoginForm />
                <hr />
                <button onClick={() => setIsForgot(true)}>Forgot Password?</button>
                <button onClick={() => setIsSignup(true)}>Sign Up</button>
                <button onClick={() => window.location.href = "/"}>Back to Main</button>
            </>}
            {isForgot && <>
                <ForgotForm />
                <button onClick={() => setIsForgot(false)}>Back to Login</button>
            </>}
            {isSignup && <>
                <SignupForm />
                <button onClick={() => setIsSignup(false)}>Back to Login</button>
            </>}
        </div>
    );
};