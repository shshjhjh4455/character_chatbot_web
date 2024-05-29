"use client";

import { useEffect, useState } from "react";
import ResetForm from "components/login/resetform";

interface emailParams {
    params: { id: string }
}

export default function ResetPassword({ params }: emailParams) {
    const [verify, setVerify] = useState({ status: 0, body: "" });
    const email = atob(decodeURIComponent(params.id));

    const fetching = async () => {
        const response = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                type: "reset"
            }),
        });
        const data = await response.json();
        setVerify(data);
    }

    useEffect(() => {
        fetching();
    }, []);

    if (verify.status === 400) {
        return (
            <div className="text-center">
                <p className="text-red-500">{verify.body}</p>
            </div>
        );
    }

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div
            className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg mt-10 mb-10"
            style={{ ...style, flexDirection: "column" }}
        >
            <ResetForm email={email} />
        </div>
    );
}