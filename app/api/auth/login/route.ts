import { findUserProvider } from "app/utils/userdb";
import { signJWT } from "app/utils/login/jwt";
import bcrypt from "bcryptjs";

interface Req {
    username: string;
    password: string;
    provider: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json();

    const user = await findUserProvider(body.username, body.provider);

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