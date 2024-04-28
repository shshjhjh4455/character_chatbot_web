import { prisma } from "./prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/auth/[...nextauth]/route";

async function findChatroomId(chatbotId : string) {
    const session = await getServerSession(authOptions);
    const uid = session.user.id;

    const id = await prisma.chatRoom.findFirst({
        where: {
            chatbotId: chatbotId,
            userId: uid,
        },
        select: {
            id: true,
        },
    });

    return id?.id;
}

export async function findMessageByChatroomId(chatbotId : string) {
    const chatroomId = await findChatroomId(chatbotId);

    return await prisma.message.findMany({
        where: {
            chatroomId: chatroomId,
        },
        orderBy: {
            createAt: "desc",
        },
        select: {
            id: true,
            role: true,
            msg: true,
        },
    });
}

export async function isUserInChatroom(email : string, provider : string, chatbotId : string) {
    const chatroomId = await findChatroomId(chatbotId);

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

// Get the user name of a chatroom
export async function getUserName(chatbotId : string) {
    const chatroomId = await findChatroomId(chatbotId);

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


// Get the chatbot name of a chatroom
export async function getChatbotName(chatbotId : string) {
    const name = await prisma.chatBot.findFirst({
        where: {
            id: chatbotId,
        },
        select: {
            name: true,
        },
    }).then((res) => {
        return res.name;
    });

    return name;
}

// Get all chatrooms of a user, with the latest message
export async function getChatRooms(id : string) {
    return await prisma.user.findFirst({
        where: {
            id: id,
        },
        select: {
            chatrooms: {
                select: {
                    id: true,
                    chatbotId: true,
                    messages: {
                        select: {
                            msg: true,
                        },
                        orderBy: {
                            createAt: "desc",
                        },
                    },
                    chatbot: {
                        select: {
                            name: true,
                        },
                    },
                },
            }
        }
    }).then((res) => {
        return res.chatrooms;
    });
}

// Create a new Message
export async function createMessage(chatbotId : string, role : string, msg : string) {
    const chatroomId = await findChatroomId(chatbotId);

    const send = await prisma.message.create({
        data: {
            chatroomId: chatroomId,
            role: role,
            msg: msg,
        },
    }).then((res) => {
        if (res.id !== null) {
            return true;
        }
        return false;
    });

    const update = await prisma.chatRoom.update({
        where: {
            id: chatroomId,
        },
        data: {
            updatedAt: new Date(),
        },
    });

    return { send, update };
}