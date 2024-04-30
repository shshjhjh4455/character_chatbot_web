import { prisma } from './prisma';

export async function getChatbotById(chatbotId: string) {
  return await prisma.chatBot.findUnique({
    where: { id: chatbotId },
  });
}