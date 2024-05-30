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
        const left = event.clientX - dragOffset.x;
        const top = event.clientY - dragOffset.y;
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
        x: event.clientX - modalRect.left,
        y: event.clientY - modalRect.top,
      });
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div
        ref={modalRef}
        className={styles.modalContent}
        onMouseDown={handleMouseDown}
        style={{ position: 'absolute' }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.profileInfo}>
          <div className={styles.profileImage}>
            <img src={chatbot.image} alt={chatbot.name} />
          </div>
          <div className={styles.profileDetails}>
            <h2>{chatbot.name}</h2>
            <p>{chatbot.description}</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
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
