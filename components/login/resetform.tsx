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
            console.log(pwResult);
        } else { setValidPw(null); }

        const pwMatchResult = checkPWMatch(pw as string, pwCheck as string);
        if (pwMatchResult !== "ok") {
            setValidPwMatch(pwMatchResult);
            console.log(pwMatchResult);
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
            return console.log("Failed to sign up");
        }
    };


    return (
        <>
            <h1>Reset</h1>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleReset}>
                <input
                    type="email"
                    value={email}
                    name="email"
                    readOnly
                /><br />
                {validPw && <h3 style={{ color: "red" }}>{validPw}</h3>}
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                /><br />
                {validPwMatch && <h3 style={{ color: "red" }}>{validPwMatch}</h3>}
                <input
                    type="password"
                    placeholder="Password Again"
                    name="password-check"
                    required
                /><br />
                <button type="submit">Reset!</button>
            </form>
        </>
    );
}