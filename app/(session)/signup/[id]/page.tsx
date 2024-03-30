"use client";

import { handleSignUp } from "../../../utils/login/handle";

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