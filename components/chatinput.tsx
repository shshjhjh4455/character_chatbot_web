"use client";
export default function ChatInput({ chatroomId }: { chatroomId: string }) {

    const sendMessage = async (event : any) => {
        event.preventDefault();
        
        const chatroomId = event.target.chatroomId.value;
        const msg = event.target.msg.value;
        
        const response = await fetch('/api/chat/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatroomId, msg }),
        });

        event.target.msg.value = "";
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