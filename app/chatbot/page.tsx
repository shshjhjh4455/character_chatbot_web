
'use client';

import styles from 'styles/chatroomlist.module.css';
import ProfileModal from 'components/profileinfo';
import { useState, useEffect } from 'react';

export default function ChatBotPage() {
  const [chatBots, setChatBots] = useState([]);

  async function fetchChatBots() {
    const response = await fetch('/api/chatbots');
    const fetchedChatBots = await response.json();
    setChatBots(fetchedChatBots);
  }

  useEffect(() => {
    fetchChatBots();
  }, []);

  return (
    <div className={`${styles.roomBody} p-12`}>
      <div className={`${styles.roomNav} text-center`}>채팅방 목록</div>
      <div className="flex-1 overflow-y-auto">
        {chatBots.map((chatroom) => (
          <ProfileItem key={chatroom.id} chatroom={chatroom} />
        ))}
      </div>
    </div>
  );

}

function ProfileItem({ chatroom }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.roomList} justify-center`}
        onClick={openModal}
      >
        <div className={`${styles.roomTitle} items-center`}>
          <div className="rounded-full bg-gray-200 mr-2 flex items-center justify-center">
            {chatroom.image ? (
              <img
                src={chatroom.image}
                alt={chatroom.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-lg font-bold text-gray-500">?</span>
            )}
          </div>
          <div style={{marginLeft:"20px"}}>
            {chatroom.name}
          </div>
          </div>
      </div>
      {isModalOpen && (
        <ProfileModal chatbot={chatroom} onClose={closeModal} />
      )}
    </>
  );
}