import ChatBox from "components/chatbox";
import ChatRoomList from "components/chatroomlist";
import ChatBotName from "components/chatbotname";
import { Suspense } from "react";
import ChatInput from "components/chatinput";

interface ChatbotPageProps {
    params: {
        chatbotId: string;
    }
}

export default function ChatbotPage({ params: { chatbotId } }: ChatbotPageProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <center><Suspense fallback={<div>loading...</div>}> <ChatBotName chatroomId={chatbotId}/> </Suspense></center>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <Suspense fallback={<div>loading...</div>}> <ChatBox chatroomId={chatbotId}/> </Suspense>
                <Suspense fallback={<div>loading...</div>}> <ChatRoomList /> </Suspense>
            </div>
            <div style={{flex : 2}}>
                <center>
                    <ChatInput chatroomId={chatbotId} />
                </center>
            </div>
        </div>
    );
}