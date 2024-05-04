import { findMessageByChatroomId, getChatbotName, getUserName } from "app/utils/msgdb";

export default async function ChatBox({ chatroomId }: { chatroomId: string }) {
    const styles = {
        user: {
            backgroundColor: "#ffff00",
            float: "right",
            margin: "15px",
            padding: "20px",
            borderRadius: "13px",
            border: "1px solid #000",
        },
        chatbot: {
            backgroundColor: "white",
            border: "1px solid #000",
            float: "left",
            margin: "15px",
            padding: "20px",
            borderRadius: "13px",
        },
    };

    const messages = await findMessageByChatroomId(chatroomId);

    const userName = await getUserName(chatroomId);
    const botName = await getChatbotName(chatroomId);

    return (
        <div style={{ flex: 7, padding: '5px', display: 'flex', flexDirection: "column-reverse", height: '300px', maxHeight: '300px', overflowY: 'scroll' }}>
            {messages.map((msg: any, i) => (
                <div key={i} style={{ flex : 3 }}>
                    <div style={styles[msg.role]}>
                        <div>{msg.role === 'user' ? userName : botName}</div>
                        <div>{msg.msg}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}