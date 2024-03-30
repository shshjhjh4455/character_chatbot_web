"use client";

import { useRouter } from "next/router";

export default function AdditionalPage()  {
    const router = useRouter();

    return (
        <div>
            <h1>Additional Information</h1>
            <form onSubmit={null}>
                <input
                    type="email"
                    value="test"
                    name="email"
                    readOnly
                />
                <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    defaultValue={null}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    min="1"
                    max="9999"
                    required
                />
                <select name="gender" id="gender" defaultValue="male">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="none">Other</option>
                </select><br />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};