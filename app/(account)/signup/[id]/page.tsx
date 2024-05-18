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
            <div>
                <h1>{check}</h1>
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