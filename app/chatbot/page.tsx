'use client';

import styles from 'styles/chatroomlist.module.css';
import ProfileModal from 'components/profileinfo';
import { useState, useEffect } from 'react';

export default function ChatBotPage() {
  const [categories, setCategories] = useState([]);

  async function fetchedCategories() {
    const response = await fetch('/api/chatbots');
    const fetchedCategories = await response.json();
    setCategories(fetchedCategories);
  }

  useEffect(() => {
    fetchedCategories();
  }, []);

  return (
    <div className={`${styles.roomBody}`}>
      <div className={`${styles.roomNav} text-center`}>채팅방 목록</div>
      <div className="flex-1 overflow-y-auto">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

function Category({ category }) {
  const chatBots = category.chatbots;

  if (chatBots.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="text-lg font-bold mb-4 p-3 bg-white rounded-lg shadow-md flex items-center justify-center text-center">{category.name}</div>
      <div className="grid grid-cols-3 gap-6">
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
          <div className="rounded-full bg-gray-300 w-16 h-16 mr-4 flex items-center justify-center overflow-hidden">
            {chatroom.image ? (
              <img
                src={chatroom.image}
                alt={chatroom.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-lg font-bold text-gray-500">?</span>
            )}
          </div>
          <div>{chatroom.name}</div>
        </div>
      </div>
      {isModalOpen && (
        <ProfileModal chatbot={chatroom} onClose={closeModal} />
      )}
    </>
  );
}
