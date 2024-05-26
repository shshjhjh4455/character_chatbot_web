"use client";

import { verifyEmailLink } from "app/utils/account/check";
import ResetForm from "components/login/resetform";

interface emailParams {
    params: { id: string }
}

export default async function ResetPassword({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    const check = await verifyEmailLink(email, "reset");

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
            <ResetForm email={email} />
        </div>
    );
}