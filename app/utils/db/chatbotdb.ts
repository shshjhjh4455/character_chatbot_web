
import { prisma } from "app/utils/prisma";

// Find a chatbot by id
export async function getChatBot(chatBotId: string) {
    const res = await prisma.chatBot.findUniqueOrThrow({
        where: {
            id: chatBotId,
        },
    });

    return res;
}

// Find all chatbots
export async function getChatBots() {
    const res = await prisma.chatBot.findMany();

    return res;
}


export async function getModelandPrompt(chatbotId: string) {
    const res = await prisma.chatBot.findUnique({
        where: {
            id: chatbotId,
        },
        select: {
            model : true,
            prompt : true,
        },
    });

    return { model: res.model, prompt: res.prompt };
}