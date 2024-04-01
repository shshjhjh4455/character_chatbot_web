"use client";

import { handleReset } from "app/utils/login/handle";

interface emailParams {
    params: { id: string }
}

export default function ResetPassword({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    return (
        <div>
            <h1>Reset</h1>
            <form onSubmit={handleReset}>
                <input
                    type="email"
                    value={email}
                    name="email"
                    readOnly
                />
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