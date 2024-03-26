import { sendEmailForgot } from '../../../utils/email';

export async function POST(req: Request) {
    const body = await req.json();

    return await sendEmailForgot(body.email)
        .then(
            (val) =>{
                if (val === 409) return new Response(JSON.stringify({ status: 409 }));
                else return new Response(JSON.stringify({ status: 200 }));
            }
        )
        .catch((error) => {
            console.error(error);

            return new Response(JSON.stringify({
                status: 500,
            }));
        });
}