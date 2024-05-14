/*
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
*/
import { prisma } from "app/utils/prisma";

// 챗봇 검색 함수
export async function getChatBots(chatBotId?: string) {
  try {
    if (chatBotId) {
      const res = await prisma.chatBot.findUniqueOrThrow({
        where: {
          id: chatBotId,
        },
      });
      return res; 
    } else {// 챗봇 조회 
      const res = await prisma.chatBot.findMany();
      return res; 
    }
  } catch (error) {
    console.error(`Error retrieving ChatBots${chatBotId ? ` with ID ${chatBotId}` : ""}:`, error);
    throw error; 
  }
}


