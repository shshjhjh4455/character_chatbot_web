import { getChatRooms } from "app/utils/msgdb";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const { searchParams } = url;
    const chatrooms = await getChatRooms();
    return new Response(JSON.stringify({ chatrooms }));
}