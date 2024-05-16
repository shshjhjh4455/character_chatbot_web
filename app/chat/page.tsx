/*
'use client';
import { useChat } from 'ai/react';
import { getChatbotById } from '../utils/chatbotdb';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ChatStyle.module.css';

export default function Chat({ chatroomId }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat(chatroomId);
  const [chatbot, setChatbot] = useState(null);

  useEffect(() => {
    const fetchChatbot = async () => {
      const chatbotData = await getChatbotById(chatroomId);
      setChatbot(chatbotData);
    };

    fetchChatbot();
  }, [chatroomId]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
          {chatbot?.image ? (
            <Image
              src={chatbot.image}
              alt={chatbot.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <span className="text-lg font-bold text-gray-500">?</span>
          )}
        </div>
        <h2 className="text-2xl font-bold">{chatbot?.name}</h2>
      </div>
      <div className={styles.chatMessages}>
        {messages.map(m => (
          <div key={m.id} className="mb-2">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.chatInput}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
*/
'use client';
import { useChat } from 'ai/react';
import { getChatbotById } from '../utils/chatbotdb';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ChatStyle.module.css';

export default function Chat({ chatroomId }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat(chatroomId);
  const [chatbot, setChatbot] = useState(null);

  useEffect(() => {
    const fetchChatbot = async () => {
      const chatbotData = await getChatbotById(chatroomId);
      setChatbot(chatbotData);
    };

    fetchChatbot();
  }, [chatroomId]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.profileImage}>
          {chatbot?.image ? (
            <Image
              src={chatbot.image}
              alt={chatbot.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <span className="text-lg font-bold text-gray-500">?</span>
          )}
        </div>
        <h2 className="text-2xl font-bold">{chatbot?.name}</h2>
      </div>
      <div className={styles.chatMessages}>
  {messages.map(m => (
    <div key={m.id} className={m.role === 'user' ? styles.userMessage : styles.message}>
      {m.role === 'assistant' && (
        <div className={styles.messageImage}>
          {chatbot?.image && (
            <Image
              src={chatbot.image}
              alt={chatbot.name}
              width={30}
              height={30}
              className="rounded-full"
            />
          )}
        </div>
      )}
      <div className={m.role === 'user' ? styles.userMessageContent : styles.messageContent}>
        <div className={styles.messageRole}>
          {m.role === 'user' ? 'User' : 'AI'}
        </div>
        <div className={m.role === 'user' ? styles.userMessageText : styles.messageText}>
          {m.content}
        </div>
      </div>
    </div>
  ))}
</div>
      <form onSubmit={handleSubmit} className={styles.chatInput}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요..."
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}