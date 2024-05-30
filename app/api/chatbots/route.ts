import { prisma } from "app/utils/prisma";

export async function GET() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      chatbots: {
        select: {
          id: true,
          name: true,
          image: true,
          description: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(categories), { status: 200 });
}