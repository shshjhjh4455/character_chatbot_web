"use client";
import { FormEvent, useState } from "react";

export default function SignupForm() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [msg, setMsg] = useState<string | null>(null);

    // Send email to sign up. Email contains a link to sign up. Email send by capstoneprojectprivate@gmail.
    const handleEmail = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        const json = await response.json();

        setEmail('');
        if (json.status === 200) {
            console.log('Email sent');
            setMsg("Email sent!");
            setError(null);
        } else {
            console.log('Failed to send email');
            setError("Failed to send email");
        }
    };

    return (
        <>
            <form onSubmit={handleEmail}>
                {msg && <h3 style={{ color: "green" }}>{msg}</h3>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input
                    type="email"
                    placeholder="Email"
                    name="signup-email"
                    required

                />
                <button type="submit">Send Sign Up Link</button>
            </form>
        </>
    );
}