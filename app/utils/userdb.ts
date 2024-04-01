import { prisma } from "./prisma";
import bcrypt from 'bcryptjs'

export async function findUserProvider(email : string, provider : string) {
    return prisma.user.findFirst({
        where: {
            email: email,
            provider: provider,
        },
    });
}

export async function updatePassword(email : string ,password : string) {
    return prisma.user.update({
        where: {
            email_provider: {
                email: email,
                provider: "credentials",
            },
        },
        data: {
            password: await bcrypt.hash(password, 10),
        },
    })
}

export async function createUser(name : string, email : string, password : string, provider : string) {
    return prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            provider: provider,
        },
    })
}

export async function createOAuthUser(name : string, email : string, provider : string) {
    return prisma.user.create({
        data: {
            name: name,
            email: email,
            provider: provider,
        },
    })
}