import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getChatRooms, getChatbotName } from "app/utils/msgdb";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function ChatRoomList() {
    const session = await getServerSession(authOptions);
    const id = session.user.id;
    const chatrooms = await getChatRooms(id);

    const chatroomNames = await Promise.all(
        chatrooms.map(async (chatroom: any) => {
          return await getChatbotName(chatroom.id); // 채팅방 이름 가져오는 비동기 함수
        })
      );

    return (
        <div style={{flex : 3, padding: '5px'}}>
          {chatroomNames.map((chatroomName, i) => (
            <div key={i}>
              <Link prefetch href={`./${chatrooms[i].id}`}>{chatroomName}</Link>
            </div>
          ))}
        </div>
    );
}