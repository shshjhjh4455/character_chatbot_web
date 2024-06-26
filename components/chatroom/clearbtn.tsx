"use client";
import { useChat } from "app/hooks/useChat";

export default function ClearBtn({ chatroomId }: { chatroomId: string }) {
    const { mutate } = useChat(chatroomId);

    const clearChat = async () => {
        const response = await fetch('/api/chat', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatroomId }),
        });
        const data = await response.json();
        data.status === 200 && mutate();
    }

    return (
        <div style={{ backgroundColor: "main-color" }}>
            <button
                style={{
                    backgroundColor: "#94beb8",
                    border: "1px solid #000",
                    width: "60px",
                    height: "40px",
                    borderRadius: "14px",
                }}
                onClick={clearChat}
            >
                Clear
            </button>
        </div>
    );
}