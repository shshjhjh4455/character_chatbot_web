"use client";

import { verifyEmailLink } from "app/utils/account/check";
import CreateForm from "components/login/createform";

interface emailParams {
    params: { id: string }
}

export default async function SignUpPage({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    const check = await verifyEmailLink(email, "signup");

    if (check != "ok") {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <p className="text-2xl text-red-500">{check}</p>
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