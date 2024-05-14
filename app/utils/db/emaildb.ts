import { prisma } from "../prisma";

export async function findEmailLink(email: string, type: string) {
    return await prisma.emailLink.findFirst({
        where: {
            email: email,
            type: type,
        },
    });
}

export async function createEmailLink(email: string, type: string) {
    return await prisma.emailLink.create({
        data: {
            email: email,
            type: type,
        },
    });
}

export async function deleteEmailLink(email: string, type: string) {
    return await prisma.emailLink.deleteMany({
        where: {
            email: email,
            type: type,
        },
    });
}