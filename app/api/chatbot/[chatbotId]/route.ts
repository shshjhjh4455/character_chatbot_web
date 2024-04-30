import { prisma } from '../../../utils/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { chatbotId: string } }) {
  const chatbotId = params.chatbotId;
  const chatbot = await prisma.chatBot.findUnique({
    where: { id: chatbotId },
  });
  return NextResponse.json(chatbot);
}