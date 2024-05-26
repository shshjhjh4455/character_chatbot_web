"use client";

import CreateForm from "components/login/createform";
import { useEffect, useState } from "react";

interface emailParams {
    params: { id: string }
}

export default function SignUpPage({ params }: emailParams) {
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
                <h1>{verify.body}</h1>
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
            <CreateForm email={email} />
        </div>
    );
}