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
            setMsg("Email sent!");
            setError(null);
        } else {
            setMsg(null);
            setError("Failed to send email");
        }
    };

    return (
        <>
            <form onSubmit={handleForgot} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                {msg && <h3 style={{ color: "green" }}>{msg}</h3>}
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <br/>
                <p style={{color:"#000",fontSize:"20px"}}>Please enter your email address to reset your password.</p>
                <br/>
                <input
                    style={{border: "1px solid #000", width: "250px", height: "40px",borderRadius:"14px", padding:"5px",marginBottom:"10px"}}
                    type="email"
                    placeholder="Reset Password Email"
                    name="forgot-password"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"210px", height:"40px",borderRadius:"14px",}} type="submit">Send Email</button>
            </form>
        </>
    );
}