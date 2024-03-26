import { prisma } from '../../../../utils/prisma'
import bcrypt from 'bcryptjs'

interface Req {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json()

    const user = await prisma.user.update({
        where: {
            email: body.email,
        },
        data: {
            password: await bcrypt.hash(body.password, 10),
        },
    })

    const { password, ...result } = user
    return new Response(JSON.stringify(result))
}