import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ChatList() {
  // chats 상태를 관리하여 채팅방 목록을 저장
  const [chats, setChats] = useState([]);

  // 컴포넌트가 마운트될 때 채팅방 목록을 가져오는 effect
  useEffect(() => {
    const fetchChats = async () => {
      // 채팅방 목록 API 호출
      const response = await fetch('/api/chats');
      const data = await response.json();
      // 받아온 데이터를 chats 상태에 저장
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      {/* 채팅방 목록을 렌더링 */}
      {chats.map((chat) => (
        // 각 채팅방 이름을 클릭하면 해당 채팅방 페이지로 이동
        <Link key={chat.id} href={`/chat/${chat.id}`}>
          {chat.name}
        </Link>
      ))}
    </div>
  );
}