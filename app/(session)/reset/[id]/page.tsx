"use client";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";

interface emailParams {
    params: { id: string }
}

export default function ResetPassword({ params }: emailParams) {

    const email = atob(decodeURIComponent(params.id));
    const handleReset = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const pw = formData.get('password');

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
            return console.log("Failed to sign up");
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleReset}>
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
                <button type="submit">Reset!</button>
            </form>
        </div>
    );
}