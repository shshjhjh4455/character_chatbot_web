import { sendEmail } from '../../utils/email';

export async function POST(req: Request) {
    const body = await req.json();

    return await sendEmail(body.email)
        .then(
            (val) =>{
                return new Response(JSON.stringify({ status: val }));
            }
        )
        .catch((error) => {
            console.error(error);

            return new Response(JSON.stringify({
                status: 500,
            }));
        });
}