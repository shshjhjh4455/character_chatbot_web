"use client";
import { checkPW, checkPWMatch } from "app/utils/account/check";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function ResetForm({ email }) {
    const [error, setError] = useState<string | null>(null);
    const [validPw, setValidPw] = useState<string | null>(null);
    const [validPwMatch, setValidPwMatch] = useState<string | null>(null);

    // Reset password. When Reset button is clicked, password is reset and user is signed in. Redirects to home page.
    const handleReset = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const pw = formData.get('password');
        const pwCheck = formData.get('password-check');

        const pwResult = checkPW(pw as string);
        if (pwResult !== "ok") {
            setValidPw(pwResult);
        } else { setValidPw(null); }

        const pwMatchResult = checkPWMatch(pw as string, pwCheck as string);
        if (pwMatchResult !== "ok") {
            setValidPwMatch(pwMatchResult);
        } else { setValidPwMatch(null); }

        if (pwResult !== "ok" || pwMatchResult !== "ok") {
            return;
        }

        const result = await fetch(`/api/auth/user/reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: pw,
            }),
        });

        const user = await result.json();
        if (user) {
            await signIn('credentials', {
                username: email,
                password: pw,
                redirect: true,
                callbackUrl: "/",
            });
        }
        else {
            setError("Failed to sign up");
            return;
        }
    };


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <br />
            <p style={{ color: "#000", fontSize: "20px" }}>Please enter your new password.</p>
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleReset} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="email"
                    value={email}
                    name="email"
                    readOnly
                />
                {validPw && <p style={{ color: "red" }}>{validPw}</p>}
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                />
                {validPwMatch && <p style={{ color: "red" }}>{validPwMatch}</p>}
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="password"
                    placeholder="Password Again"
                    name="password-check"
                    required
                />
                <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"210px", height:"40px",borderRadius:"14px",}} type="submit">Reset!</button>
            </form>
        </div>
    );
}