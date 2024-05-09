import { updatePassword } from 'app/utils/db/userdb';

interface Req {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json()

    const user = await updatePassword(body.email, body.password);

    const { password, ...result } = user
    return new Response(JSON.stringify(result))
}