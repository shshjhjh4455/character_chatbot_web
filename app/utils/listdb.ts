import { prisma } from "./prisma";

export async function getChatrooms() {
  const chatrooms = await prisma.chatBot.findMany({
    select: {
      id: true,
      name: true,
      image: true, // 챗봇 프로필 이미지 필드 추가
    },
  });
  return chatrooms;
}

