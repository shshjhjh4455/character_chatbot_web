"use client";

import { useChat, useChatRooms } from "app/hooks/useChat";

export default function ChatInput({ chatroomId }: { chatroomId: string }) {

    const { mutate } = useChat(chatroomId);
    const chatrooms = useChatRooms();

    const sendMessage = async (event : any) => {
        event.preventDefault();
        
        const chatroomId = event.target.chatroomId.value;
        const msg = event.target.msg.value;
        
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatroomId, msg }),
        });

        event.target.msg.value = "";
        mutate();
        chatrooms.mutate();
    }

    return (
        <div style={{ flex: 2 }}>
            <center>
                <form onSubmit={sendMessage}>
                    <input hidden type="text" id="chatroomId" name="chatroomId" defaultValue={chatroomId} />
                    <input size={50} type="text" id="msg" name="msg" />
                    <button type="submit">Send</button>
                </form>
            </center>
        </div>
    );
}