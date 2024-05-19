"use client";

import { useChat } from "app/hooks/useChat";

export default function ChatInput({ chatroomId }: { chatroomId: string }) {

    const { mutate } = useChat(chatroomId);

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

        if (response.status === 200) {
            mutate();
            const chatbotres = await fetch('/api/chat/openai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chatroomId, message: msg }),
            });

            if (chatbotres.status === 200) {
                mutate();
            }
        }
    }

    return (
        <div style={{ flex: 2 , marginTop: "40px",}}>
            <center>
                <form onSubmit={sendMessage}>
                    <input hidden type="text" id="chatroomId" name="chatroomId" defaultValue={chatroomId} />
                    <input style={{paddingLeft:"10px",marginRight:'30px', border: "1px solid #000", height:"40px", borderRadius:"14px"}} size={60} type="text" id="msg" name="msg" />
                    <button style={{backgroundColor:"#94beb8",border: "1px solid #000", width:"60px", height:"40px",borderRadius:"14px",}} type="submit">Send</button>
                </form>
            </center>
        </div>
    );
}