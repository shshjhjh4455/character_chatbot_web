"use client";

import CreateForm from "components/login/createform";
import { useEffect, useState } from "react";

interface emailParams {
    params: { id: string }
}

export default function SignUpPage({ params }: emailParams) {
    const [verify, setVerify] = useState({ status: 0, body: "Loading..." });
    const email = atob(decodeURIComponent(params.id));

    const fetching = async () => {
        const response = await fetch("/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                type: "signup"
            }),
        });
        const data = await response.json();
        setVerify(data);
    }

    useEffect(() => {
        fetching();
    }, []);
    
    if (verify.status !== 200) {
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
        <div style={{ ...style, flexDirection : "column" }}>
            <CreateForm email={email} />
        </div>
    );
}