'use client';
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: currentMessage }]);
    setCurrentMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messages),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = response.body;
      if (!data) {
        throw new Error('No data received');
      }

      const reader = data.getReader();
      const decoder = new TextDecoder('utf-8');
      let receivedData = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        receivedData += decoder.decode(value);
        setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: receivedData }]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role}: </strong>
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        disabled={isLoading}
      />
      <button onClick={sendMessage} disabled={isLoading}>
        Send
      </button>
    </div>
  );
}