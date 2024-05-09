"use client";

import ResetForm from "components/login/resetform";

interface emailParams {
    params: { id: string }
}

export default function ResetPassword({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    return (
        <div>
            <ResetForm email={email} />
        </div>
    );
}