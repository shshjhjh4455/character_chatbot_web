import { getChatrooms } from "components/listdb"
import React from "react";
import { getServerSession } from "next-auth";


const ChatroomList = () => {
    // 채팅방 목록 상태 변수 (초기값은 빈 배열)
    const [chatrooms, setChatrooms] = React.useState([]);
    const styles = {
      backgroundColor: "#f0f0f0",
      margin: "5px",
      padding: "10px",
      border: "1px solid #000",
  };
  
    // useEffect hook를 사용하여 채팅방 목록 가져오기
    React.useEffect(() => {
      const fetchChatrooms = async () => {
        // getChatrooms() 함수로 채팅방 목록 가져옴
        const fetchedChatrooms = await getChatrooms();
        // 채팅방 목록 상태 변수 업데이트
        setChatrooms(fetchedChatrooms);
      };
  
      // 컴포넌트 마운트 시 한 번만 실행
      fetchChatrooms();
    }, []);
  
    return (
      <div>
        {chatrooms.map((chatroom) => (
          <div key={chatroom.id}>
            <h2>{chatroom.name}</h2> <p>{chatroom.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ChatroomList;

/*
import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getChatRooms, getChatbotName } from "./listdb";
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
*/


