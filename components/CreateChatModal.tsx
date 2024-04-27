import { useState } from 'react';

interface CreateChatModalProps {
  onClose: () => void;
}

export default function CreateChatModal({ onClose }: CreateChatModalProps) {
  const [chatName, setChatName] = useState('');

  const handleSubmit = async () => {
    // 채팅방 생성 API 호출
    await fetch('/api/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: chatName }),
    });

    onClose();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Chat Name"
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}