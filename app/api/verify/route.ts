import { verifyEmailLink } from "app/utils/account/check";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const email = body.email;
    const type = body.type;

    const check = await verifyEmailLink(email, type);

    if (check != "ok") {
        return new Response(JSON.stringify({ status: 400, body: check }));
    }

    return new Response(JSON.stringify({ status: 200 }));
}