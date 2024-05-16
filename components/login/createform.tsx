"use client";
import { checkPW, checkPWMatch } from "app/utils/account/check";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function CreateForm({ email }) {
    const [error, setError] = useState<string | null>(null);
    const [validPw, setValidPw] = useState<string | null>(null);
    const [validPwMatch, setValidPwMatch] = useState<string | null>(null);

    // Use CredentialsProvider to sign Up . When Sign Up button is clicked, user is signed up and signed in. Redirects to home page.
    const handleSignUp = async(event: FormEvent<HTMLFormElement>) => {
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

        const result = await fetch(`/api/auth/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: email,
                password: pw,
                provider: "credentials"
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
            setError("Failed to Create");
            return console.log("Failed to Create");
        }
    };

    return (
        <>
            <h1>Sign Up</h1>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form onSubmit={handleSignUp}>
                <input
                    type="email"
                    value={email}
                    name="email"
                    readOnly
                /><br />
                <input
                    type="text"
                    placeholder="username"
                    name="name"
                    required
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
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}