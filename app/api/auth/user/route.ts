import { prisma } from '../../../utils/prisma'
import bcrypt from 'bcryptjs'

interface Req {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json()

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
            age: body.age,
            gender: body.gender
        },
    })

    const { password, ...result } = user
    return new Response(JSON.stringify(result))
}