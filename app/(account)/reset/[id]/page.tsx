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
            <div>
                <h1>{check}</h1>
            </div>
        );
    }

    return (
        <div>
            <ResetForm email={email} />
        </div>
    );
}