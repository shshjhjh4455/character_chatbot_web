import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "../prisma";

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

    return send;
}

// Delete all messages of a chatroom
export async function deleteMessage(chatbotId : string) {
    const chatroomId = await findChatroomId(chatbotId);

    const deleteMsg = await prisma.message.deleteMany({
        where: {
            chatroomId: chatroomId,
        },
    });

    return deleteMsg;
}