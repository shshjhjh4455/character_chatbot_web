import { sendEmail } from '../../utils/email';

export async function POST(req: Request) {
    const body = await req.json();

    return sendEmail(body.email)
        .then(
            () =>
                new Response(JSON.stringify({ status: 200 }))
        )
        .catch((error) => {
            console.error(error);

            return new Response(JSON.stringify({
                status: 500,
            }));
        });
}