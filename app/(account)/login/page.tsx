"use client";

import ForgotForm from 'components/login/forgotform';
import LoginForm from 'components/login/loginform';
import SignupForm from 'components/login/signupform';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function LoginPage() {
    const [isForgot, setIsForgot] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const session = useSession();

    // Already Logged in
    if (session.data) {
        if (typeof window !== 'undefined') {
            window.location.href = "/";
        }
        return null; // While redirecting, don't render anything
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginContent
                isForgot={isForgot}
                setIsForgot={setIsForgot}
                isSignup={isSignup}
                setIsSignup={setIsSignup}
            />
        </Suspense>
    );
}

function LoginContent({ isForgot, setIsForgot, isSignup, setIsSignup }) {
    const errorMsg = useSearchParams().get("error");
   
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    
    return (
        <div 
            className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10 mb-10" 
            style={{ ...style, flexDirection: "column" }}
        >
            {!isForgot && !isSignup && <>
                <LoginForm errorMsg={errorMsg} />
                <div className="w-4/5 mx-2 border-b-2 border-gray-400 my-4" />
                <div className="flex flex-wrap justify-center">
                    <button
                        className="mt-4 w-40 h-10 mr-2"
                        style={{
                            backgroundColor: "#94beb8",
                            border: "1px solid #000",
                            borderRadius: "14px"
                        }}
                        onClick={() => setIsForgot(true)}
                    >
                        Forgot Password?
                    </button>
                    <button
                        className="mt-4 w-40 h-10"
                        style={{
                            backgroundColor: "#94beb8",
                            border: "1px solid #000",
                            borderRadius: "14px"
                        }}
                        onClick={() => setIsSignup(true)}
                    >
                        Sign Up
                    </button>
                </div>
                <button style={{ backgroundColor: "#94beb8", border: "1px solid #000", marginTop: "15px", width: "180px", height: "40px", borderRadius: "14px" }} onClick={() => window.location.href = "/"}>Back to Main</button>
            </>}
            {isForgot && <>
                <ForgotForm />
                <button style={{ backgroundColor: "#94beb8", border: "1px solid #000", marginTop: "15px", width: "180px", height: "40px", borderRadius: "14px" }} onClick={() => setIsForgot(false)}>Back to Login</button>
            </>}
            {isSignup && <>
                <SignupForm />
                <button style={{ backgroundColor: "#94beb8", border: "1px solid #000", marginTop: "15px", width: "180px", height: "40px", borderRadius: "14px" }} onClick={() => setIsSignup(false)}>Back to Login</button>
            </>}
        </div>
    );
}