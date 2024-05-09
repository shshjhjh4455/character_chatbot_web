"use client";
import { FormEvent, useState } from "react";

export default function ForgotForm() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [msg, setMsg] = useState<string | null>(null);

    // Send email to reset password. Email contains a link to reset password. Email send by capstoneprojectprivate@gmail.
    const handleForgot = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/contact/reset', {
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
            setMsg(null);
            setError("Failed to send email");
        }
    };

    return (
        <>
            <form onSubmit={handleForgot}>
                {msg && <h3 style={{ color: "green" }}>{msg}</h3>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input
                    type="email"
                    placeholder="Reset Password Email"
                    name="forgot-password"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Send Email to reset Password!</button>
            </form>
        </>
    );
}