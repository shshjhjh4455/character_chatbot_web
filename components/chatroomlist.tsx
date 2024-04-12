import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getChatRooms, getChatbotName } from "app/utils/msgdb";
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

    const chatroomNames = await Promise.all(
        chatrooms.map(async (chatroom: any) => {
            return await getChatbotName(chatroom.id); // 채팅방 이름 가져오는 비동기 함수
        })
    );

    return (
        <div style={{ flex: 3, padding: '5px' }}>
            {chatroomNames.map((chatroomName, i) => (
                <div key={i} style={styles}>
                    <Link prefetch href={`./${chatrooms[i].id}`}>{chatroomName}</Link>
                    <p>Last msg : {chatrooms[i].messages[0].msg} </p>
                </div>
            ))}
        </div>
    );
}