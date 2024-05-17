// export default async function ProfileInfo({chatBotId}: {chatBotId: string}) {
//   const res = await getChatBot(chatBotId);
//   return(
//     <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
//       <h1 className="mx-auto flex flex-col py-10 text-6xl">{res.name}</h1>
//       <div className="text-3xl py-5">{res.description}</div>
//       <a className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg" href={`/chatbot/` + res.id}>Chat!</a>

"use client";
import styles from 'styles/profileinfo.module.css';
import { useRef, useState, useEffect } from 'react';

interface ProfileModalProps {
  chatbot: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

export default function ProfileModal({ chatbot, onClose }: ProfileModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging && modalRef.current) {
        const left = event.pageX - dragOffset.x;
        const top = event.pageY - dragOffset.y;
        modalRef.current.style.left = `${left}px`;
        modalRef.current.style.top = `${top}px`;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const modalRect = modalRef.current?.getBoundingClientRect();
    if (modalRect) {
      setDragOffset({
        x: event.pageX - modalRect.left,
        y: event.pageY - modalRect.top,
      });
    }
  };
  const handleImageMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.modalOverlay}>
      <div
        ref={modalRef}
        className={styles.modalContent}
        onMouseDown={handleMouseDown}
      >
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.profileInfo}>
          <div className={styles.profileImage} onMouseDown={handleImageMouseDown}>
            <img src={chatbot.image} alt={chatbot.name} />
          </div>
          <div className={styles.profileDetails}>
            <h2 style={{textAlign:'center'}}>{chatbot.name}</h2>
            <p style={{marginTop:'20px',textAlign:'center'}}>{chatbot.description}</p>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
        <button style={{ justifyContent:'center',backgroundColor:"#94beb8",border: "1px solid #000", width:"90px", height:"40px",borderRadius:"14px",}}
          className={styles.chatButton}
          onClick={() => (window.location.href = `/chatbot/${chatbot.id}`)}
        >
          채팅방 입장
        </button>
        </div>
      </div>
    </div>
  );
}


