"use client";
import { useChat } from "app/hooks/useChat";
export default function ChatBox({ chatBotId }: { chatBotId: string }) {
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

    const { data, isLoading, isError } = useChat(chatBotId);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;

    return (
        <div style={{ flex: 7, padding: '5px', display: 'flex', flexDirection: "column-reverse", height: '300px', maxHeight: '300px', overflowY: 'scroll' }}>
            {data.map((msg: any, i : number) => (
                <div key={i} style={{ flex : 3 }}>
                    <div style={styles[msg.role]}>
                        <div>{msg.msg}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}