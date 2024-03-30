import { signJWT } from "../../../utils/login/jwt";
import { prisma } from "../../../utils/prisma";
import bcrypt from "bcryptjs";

interface Req {
    username: string;
    password: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json();

    const user = await prisma.user.findFirst({
        where: {
            email: body.username,
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, ...userWithoutPass } = user;
        const accessToken = signJWT(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken,
        };
        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}