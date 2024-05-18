import { createMessage } from "app/utils/db/msgdb";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

async function checkToken(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.SECRET });
    if (!token) {
        return null;
    }
    return token;
}

export async function POST(req: NextRequest) {
    const token = await checkToken(req);
    if (token == null) {
        return new Response(JSON.stringify({ status: 401, body: "Unauthorized" }));
    }

    const body = await req.json();
    const chatroomId = body.chatroomId;
    const message = body.message;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_KEY}`,
        },
        body: JSON.stringify({
            model: 'ft:gpt-3.5-turbo-0125:personal:parasite-giwoo:9PndvJgA',
            messages: [{ role: 'user', content: message }],
        }),
    });

    const data = await response.json();

    if (data.choices[0].message.role == 'assistant') {
        await createMessage(chatroomId, 'chatbot', data.choices[0].message.content);
        return new Response(JSON.stringify({ status: 200, body: "Messagme created" }));
    }

    return new Response(JSON.stringify({ status: 400, body: "Bad Request" }));
}