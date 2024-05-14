"use client";
import { useChat } from "app/hooks/useChat";

export default function ClearBtn({ chatroomId }: { chatroomId: string }) {
    const { mutate } = useChat(chatroomId);

    const clearChat = async (event : any) => {
        event.preventDefault();
        
        const chatroomId = event.target.chatroomId.value;
        
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
        <div style={{ flex: 2 }}>
            <center>
                <form onSubmit={clearChat}>
                    <input hidden type="text" id="chatroomId" name="chatroomId" defaultValue={chatroomId} />
                    <button type="submit">Clear</button>
                </form>
            </center>
        </div>
    );
}