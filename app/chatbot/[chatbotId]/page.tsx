import ChatBox from "components/chatroom/chatbox";
import { getChatBot } from "app/utils/db/chatbotdb";
import ChatInput from "components/chatroom/chatinput";
import ClearBtn from "components/chatroom/clearbtn";

export default async function ChatbotPage({ params }: { params: { chatbotId: string } }) {
    const chatbot = await getChatBot(params.chatbotId);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <center>
                    <h1>{chatbot.name}</h1>
                </center>
                <div style={{ float: "right" }}>
                    <ClearBtn chatroomId={chatbot.id} />
                </div>
            </div>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <ChatBox chatBotId={chatbot.id} />
            </div>
            <div style={{ flex: 2 }}>
                <center>
                    <ChatInput chatroomId={chatbot.id} />
                </center>
            </div>
        </div>
    );
}