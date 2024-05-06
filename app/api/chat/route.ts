import { findMessageByChatroomId, getChatRooms, getChatbotName, getUserName } from "app/utils/msgdb";
import { createMessage } from "app/utils/msgdb";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const { searchParams } = url;
    const chatBotId = searchParams.get('chatBotId');
    const messages = await findMessageByChatroomId(chatBotId);
    const user = await getUserName(chatBotId);
    const bot = await getChatbotName(chatBotId);
    
    return new Response(JSON.stringify({ messages, user, bot }));
}

export async function POST(req: Request) {
    const body = await req.json();

    const chatroomId = body.chatroomId;
    const role = 'user';
    const msg = body.msg;

    const result = await createMessage(chatroomId, role, msg);


    if(result != null) {
        await createMessage(chatroomId, 'chatbot', "Chatbot test msg");
        return new Response(JSON.stringify({ status: 200, body: "Message created" }));
    }
    return new Response(JSON.stringify({ status: 500, body: "Error" }));
}