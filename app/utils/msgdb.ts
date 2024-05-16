
import  {prisma}  from "./prisma";
export async function findMessageByChatroomId(chatroomId : string) {
    return await prisma.message.findMany({
        where: {
            chatroomId: chatroomId,
        },
        orderBy: {
            updatedAt: "asc",
        },
        select: {
            id: true,
            role: true,
            msg: true,
        },
    });
}
export async function isUserInChatroom(email : string, provider : string, chatroomId : string) {
    return prisma.chatRoom.findFirst({
        where: {
            id: chatroomId,
        },
        select : {
            user: {
                where: {
                    email: email,
                    provider: provider,
                },
            },
        },
    }).then((res) => {
        return res.user !== null;
    });
}

export async function getUserName(chatroomId : string) {
    const name = await prisma.chatRoom.findFirst({
        where: {
            id: chatroomId,
        },
        select : {
            user: {
                select: {
                    name: true,
                },
            },
        },
    }).then((res) => {
        return res.user.name;
    });

    return name;
}

export async function getChatbotName(chatroomId : string) {
    const name =await prisma.chatRoom.findFirst({
        where: {
            id: chatroomId,
        },
        select : {
            chatbot: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    }).then((res) => {
        return res.chatbot.name
    });

    return name;
}

export async function getChatRooms(id : string) {
    return await prisma.user.findFirst({
        where: {
            id: id,
        },
        select: {
            chatrooms: true
        }
    }).then((res) => {
        return res.chatrooms;
    });
}

export async function getChatroomsByChatbotId(chatbotId: string) {
    return await prisma.chatRoom.findMany({
      where: {
        chatbotId: chatbotId,
      },
      include: {
        user: true,
        chatbot: true,
      },
    });
  }