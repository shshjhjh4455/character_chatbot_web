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
            setMsg("Email sent!");
            setError(null);
        } else {
            setError("Failed to send email");
        }
    };

    return (
        <>
            <form onSubmit={handleEmail} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {msg && <h3 style={{ color: "green" }}>{msg}</h3>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <br />
                <p style={{color:"#000",fontSize:"20px"}}>Please enter your email address to sign up.</p>
                <br />
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="email"
                    placeholder="Email"
                    name="signup-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"210px", height:"40px",borderRadius:"14px",}} type="submit">Send Email</button>
            </form>
        </>
    );
}