import { createUser, createChatrooms } from 'app/utils/userdb';

interface Req {
    name: string;
    email: string;
    password: string;
    provider: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json()

    const user = await createUser(body.name, body.email, body.password, body.provider);

    await createChatrooms(user.id);

    const { password, ...result } = user
    return new Response(JSON.stringify(result))
}