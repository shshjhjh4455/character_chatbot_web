import { deleteMessage, findMessageByChatroomId } from "app/utils/db/msgdb";
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

export async function GET(req: NextRequest) {
    const token = await checkToken(req);
    if (token == null) {
        return new Response(JSON.stringify({ status: 401, body: "Unauthorized" }));
    }
    const url = new URL(req.url);
    const { searchParams } = url;
    const chatBotId = searchParams.get('chatBotId');

    const messages = await findMessageByChatroomId(chatBotId);

    return new Response(JSON.stringify(messages));
}

export async function POST(req: NextRequest) {
    const token = await checkToken(req);
    if (token == null) {
        return new Response(JSON.stringify({ status: 401, body: "Unauthorized" }));
    }

    const body = await req.json();

    const chatroomId = body.chatroomId;
    const role = 'user';
    const msg = body.msg;

    const result = await createMessage(chatroomId, role, msg);


    if(result != null) {
        return new Response(JSON.stringify({ status: 200, body: "Message created" }));
    }
    return new Response(JSON.stringify({ status: 500, body: "Error" }));
}

export async function DELETE(req: NextRequest) {
    const token = await checkToken(req);
    if (token == null) {
        return new Response(JSON.stringify({ status: 401, body: "Unauthorized" }));
    }

    const body = await req.json();
    const chatroomId = body.chatroomId;
    const result = await deleteMessage(chatroomId);

    if(result != null) {
        return new Response(JSON.stringify({ status: 200, body: "Message deleted" }));
    }
    return new Response(JSON.stringify({ status: 500, body: "Error" }));
}