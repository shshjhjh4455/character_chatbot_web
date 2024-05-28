"use client";
import { useChat } from "app/hooks/useChat";

export default function ChatBox({ chatBotId }: { chatBotId: string }) {
    const styles = {
        user: {
            backgroundColor: "#94beb8",
            float: "right",
            margin: "15px 15px 15px 60px",
            padding: "20px",
            borderRadius: "13px",
            border: "1px solid #000",
            maxWidth: "450px",
        },
        chatbot: {
            backgroundColor: "white",
            border: "1px solid #000",
            float: "left",
            margin: "15px 60px 15px 15px",
            padding: "20px",
            borderRadius: "13px",
            maxWidth: "450px",
        },
    };

    const { data, isLoading, isError } = useChat(chatBotId);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;

    return (
        <div style={{
            flex: 7,
            padding: '5px',
            display: 'flex',
            flexDirection: "column-reverse",
            height: '450px',
            maxHeight: '450px',
            overflowY: 'scroll',
            marginTop: "30px",
        }}>
            {data.map((msg: any, i: number) => (
                <div key={i} style={{ flex: 3 }}>
                    <div style={{
                        ...styles[msg.role],
                        width: 'fit-content',
                        maxWidth: '55%', // 기본 최대 너비를 70%로 설정
                        wordBreak: 'break-word',
                    }}>
                        <div style={{ width: 'max-content', maxWidth: '100%', wordBreak: 'break-word' }}>
                            {msg.msg}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
