"use client";

import { handleSignUp } from "app/utils/login/handle";

interface emailParams {
    params: { id: string }
}

export default function SignUpPage({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    return (
        <div>
            <h1>Sign Up</h1>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}