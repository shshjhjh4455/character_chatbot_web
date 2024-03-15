import { prisma } from "../../../utils/prisma";
import bcrypt from "bcryptjs";

interface Req {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user;
        return new Response(JSON.stringify(userWithoutPass));
    } else return new Response(JSON.stringify(null));
}