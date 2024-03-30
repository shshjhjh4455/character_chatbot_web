import { createUser } from '../../../utils/userdb';

interface Req {
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
}

export async function POST(request: Request) {
    const body: Req = await request.json()

    const user = await createUser(body.name, body.email, body.password, body.age, body.gender);

    const { password, ...result } = user
    return new Response(JSON.stringify(result))
}