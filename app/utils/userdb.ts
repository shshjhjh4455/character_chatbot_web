import { prisma } from "./prisma";
import bcrypt from 'bcryptjs'

export async function findUser(email : string) {
    return prisma.user.findFirst({
        where: {
            email: email,
        },
    });
}

export async function updatePassword(email : string ,password : string) {
    return prisma.user.update({
        where: {
            email: email,
        },
        data: {
            password: await bcrypt.hash(password, 10),
        },
    })
}

export async function createUser(name : string, email : string, password : string, age : number, gender : string) {
    return prisma.user.create({
        data: {
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            age: age,
            gender: gender
        },
    })
}