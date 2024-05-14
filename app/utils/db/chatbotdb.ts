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




