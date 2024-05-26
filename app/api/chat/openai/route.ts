import { getModelandPrompt } from "app/utils/db/chatbotdb";
import { createMessage, findMessageByChatroomId } from "app/utils/db/msgdb";
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
    const messages = await findMessageByChatroomId(chatroomId);
    const reversedMessages = messages.reverse();

    const { model, prompt } = await getModelandPrompt(chatroomId);

    const USER: OpenAI.ChatCompletionRole = "user";
    const ASSISTANT: OpenAI.ChatCompletionRole = "assistant";

    const response = await openai.chat.completions.create({
        model: model,
        messages: [
            {
                role: 'system',
                content: prompt,
            },
            ...reversedMessages.slice(0, -1).map((msg)=> ({
                role : msg.role === 'user' ? USER : ASSISTANT,
                content: msg.msg,
            })),
            {
                role: 'user',
                content: reversedMessages[messages.length - 1].msg,
            },
        ],
        temperature: 0.1,
        max_tokens: 1000,
    });

    const choices = response.choices;

    if (choices[0].message.role == 'assistant') {
        await createMessage(chatroomId, 'chatbot', choices[0].message.content);
        return new Response(JSON.stringify({ status: 200, body: "Messagme created" }));
    }

    return new Response(JSON.stringify({ status: 400, body: "Bad Request" }));
}