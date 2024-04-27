import { useState } from 'react';
import ChatList from './ChatList';
import CreateChatModal from './CreateChatModal';

export default function Chats() {
  // showModal 상태를 관리하여 채팅방 생성 모달의 표시 여부를 결정
  const [showModal, setShowModal] = useState(false);

  // 채팅방 생성 버튼 클릭 시 실행되는 함수
  const handleCreateChat = () => {
    // showModal 상태를 true로 설정하여 모달을 표시
    setShowModal(true);
  };

  return (
    <div>
      {/* 채팅방 생성 버튼 */}
      <button onClick={handleCreateChat}>Create New Chat</button>
      {/* 채팅방 목록 컴포넌트 렌더링 */}
      <ChatList />
      {/* showModal 상태가 true일 때 채팅방 생성 모달 컴포넌트 렌더링 */}
      {showModal && <CreateChatModal onClose={() => setShowModal(false)} />}
    </div>
  );
}