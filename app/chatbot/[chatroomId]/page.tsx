import ChatBox from "components/chatbox";
import ChatRoomList from "components/chatroomList";
import ChatBotName from "components/chatbotname";
import { Suspense } from "react";

interface ChatbotPageProps {
    params: {
        chatroomId: string;
    }
}

export default function ChatbotPage({ params: { chatroomId } }: ChatbotPageProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <center><Suspense fallback={<div>loading...</div>}> <ChatBotName chatroomId={chatroomId}/> </Suspense></center>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <Suspense fallback={<div>loading...</div>}> <ChatBox chatroomId={chatroomId}/> </Suspense>
                <Suspense fallback={<div>loading...</div>}> <ChatRoomList /> </Suspense>
            </div>
            <div style={{flex : 2}}>
                <center>
                    <form>
                        <input size={50} type="text" />
                        <button type="submit">Send</button>
                    </form>
                </center>
            </div>
        </div>
    );
}