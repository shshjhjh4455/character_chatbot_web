import { createMessage } from "app/utils/msgdb";

export async function POST(req: Request) {
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