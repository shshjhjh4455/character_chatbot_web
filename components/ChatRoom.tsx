import { useState, useEffect, useRef } from 'react';

interface ChatRoomProps {
  chatId: number;
}

export default function ChatRoom({ chatId }: ChatRoomProps) {
  // 메시지 목록, 현재 메시지를 관리하는 상태 변수
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  // 메시지 목록의 마지막 부분을 스크롤 위치로 설정하기 위한 ref
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 컴포넌트가 마운트되거나 chatId가 변경될 때마다 실행되는 effect
  useEffect(() => {
    const fetchMessages = async () => {
      // 채팅 메시지 목록 API 호출
      const response = await fetch(`/api/messages?chatId=${chatId}`);
      const data = await response.json();
      // 받아온 데이터를 messages 상태에 저장
      setMessages(data);
    };

    fetchMessages();
  }, [chatId]);

  // 새 메시지가 추가될 때마다 실행되는 effect
  useEffect(() => {
    // 메시지 목록의 마지막 부분으로 스크롤 위치 이동
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 메시지 전송 함수
  const handleSendMessage = async () => {
    // 입력된 메시지가 있을 경우에만 전송
    if (currentMessage.trim()) {
      // 메시지 전송 API 호출
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId, content: currentMessage }),
      });

      const data = await response.json();
      // 받아온 데이터를 messages 상태에 추가
      setMessages((prevMessages) => [...prevMessages, data]);
      // 현재 메시지 상태 초기화
      setCurrentMessage('');
    }
  };

  return (
    <div>
      {/* 메시지 목록 렌더링 */}
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.content}</div>
        ))}
        {/* 메시지 목록의 마지막 부분을 스크롤 위치로 설정하기 위한 div */}
        <div ref={messagesEndRef} />
      </div>
      {/* 메시지 입력 필드 */}
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      {/* 메시지 전송 버튼 */}
      <button onClick={handleSendMessage}>Send</button>
      {/* ChatPrompt 컴포넌트 렌더링 (이 부분은 생략되어 있었습니다) */}
      <ChatRoom chatId={chatId} />
    </div>
  );
}