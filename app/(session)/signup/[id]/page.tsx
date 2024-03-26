"use client";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";
import { checkPW, checkPWMatch } from "../../../utils/check";

interface emailParams {
    params: { id: string }
}

export default function SignUpPage({ params }: emailParams) {

    const email = atob(decodeURIComponent(params.id));
    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const pw = formData.get('password');
        const pwCheck = formData.get('password-check');

        const pwResult = await checkPW(pw as string);
        if (pwResult !== "ok") {
            return console.log(pwResult);
        }
        const pwMatchResult = await checkPWMatch(pw as string, pwCheck as string);
        if (pwMatchResult !== "ok") {
            return console.log(pwMatchResult);
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
                age: Number(formData.get('age')),
                gender: formData.get('gender')
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
            return console.log("Failed to sign up");
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="username"
                    name="name"
                    required
                /><br />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                /><br />
                <input
                    type="password"
                    placeholder="Password Again"
                    name="password-check"
                    required
                /><br />
                <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    min="1"
                    max="9999"
                    required
                /><br />
                <select name="gender" id="gender" defaultValue="male">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Other</option>
                </select><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}