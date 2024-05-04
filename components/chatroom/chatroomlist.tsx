import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getChatRooms } from "app/utils/msgdb";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function ChatRoomList() {
    const styles = {
        backgroundColor: "#f0f0f0",
        margin: "5px",
        padding: "10px",
        border: "1px solid #000",
    };

    const session = await getServerSession(authOptions);
    const id = session.user.id;
    const chatrooms = await getChatRooms(id);

    return (
        <div style={{ flex: 3, padding: '5px', height: '300px', maxHeight: '300px', overflowY: 'scroll' }}>
            {chatrooms.map((chatroom) => (
                <div key={chatroom.chatbotId} style={styles}>
                    <Link prefetch href={`./${chatroom.chatbotId}`}>{chatroom.chatbot.name}</Link>
                    <p>Last msg : {chatroom.messages[0]?.msg} </p>
                </div>
            ))}
        </div>
    );
}