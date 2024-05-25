import { getModel } from "app/utils/db/chatbotdb";
import { createMessage } from "app/utils/db/msgdb";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

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
    const model = await getModel(chatroomId);

    const response = await openai.chat.completions.create({
        model: model,
        messages: [{
            role: 'system',
            content: 'Giwoo = 기우, 너는 이제 기우이다. 기우가 되어서 나와 대화해줘. 기우처럼 생각하여 말해야한다.' 
        }, { role: 'user', content: message }],
    });

    const choices = response.choices;

    if (choices[0].message.role == 'assistant') {
        await createMessage(chatroomId, 'chatbot', choices[0].message.content);
        return new Response(JSON.stringify({ status: 200, body: "Messagme created" }));
    }

    return new Response(JSON.stringify({ status: 400, body: "Bad Request" }));
}