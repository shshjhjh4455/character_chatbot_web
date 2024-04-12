import { prisma } from "./prisma";

export async function findMessageByChatroomId(chatroomId : string) {
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

// Get the user name of a chatroom
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


// Get the chatbot name of a chatroom
export async function getChatbotName(chatroomId : string) {
    const name = await prisma.chatRoom.findFirst({
        where: {
            id: chatroomId,
        },
        select : {
            chatbot: {
                select: {
                    name: true,
                },
            },
        },
    }).then((res) => {
        return res.chatbot.name;
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
                    messages: {
                        select: {
                            msg: true,
                        },
                        orderBy: {
                            createAt: "desc",
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
export async function createMessage(chatroomId : string, role : string, msg : string) {
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