"use client";

import CreateForm from "components/login/createform";

interface emailParams {
    params: { id: string }
}

export default function SignUpPage({ params }: emailParams) {
    const email = atob(decodeURIComponent(params.id));

    return (
        <div>
            <CreateForm email={email} />
        </div>
    );
}