import { prisma } from "app/utils/prisma";

export async function GET() {
  const chatBots = await prisma.chatBot.findMany();
  return new Response(JSON.stringify(chatBots), { status: 200 });
}