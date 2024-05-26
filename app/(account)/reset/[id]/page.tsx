"use client";

import { useEffect, useState } from "react";
import ResetForm from "components/login/resetform";

interface emailParams {
    params: { id: string }
}

export default function ResetPassword({ params }: emailParams) {
    const [verify, setVerify] = useState({ status: 0, body: "" });
    const email = atob(decodeURIComponent(params.id));

    useEffect(() => {
        fetch("/api/verify-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                type: "signup"
            }),
        }).then((res) => res.json())
        .then((data) => {
            setVerify(data);
        });
    }, []);

    if (verify.status === 400) {
        return (
            <div>
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
        <div style={{ ...style, flexDirection : "column" }}>
            <ResetForm email={email} />
        </div>
    );
}