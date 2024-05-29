import ChatBox from "components/chatroom/chatbox";
import { getChatBot } from "app/utils/db/chatbotdb";
import ChatInput from "components/chatroom/chatinput";
import ClearBtn from "components/chatroom/clearbtn";
import Backbtn from "components/chatroom/backbtn";

export default async function ChatbotPage({ params }: { params: { chatbotId: string } }) {
    const chatbot = await getChatBot(params.chatbotId);

    const imgStyle = {
        width: "60px",
        height: "60px",
        borderRadius: "50%",
    }

    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <div className="flex justify-between p-4">
                <Backbtn />
                <ClearBtn chatroomId={chatbot.id} />
            </div>
            <div className="flex justify-center items-center flex-row, p-4 border-b-2">
                {chatbot.image ? (
                    <img src={chatbot.image} alt={chatbot.name} style={imgStyle} />
                ) : (
                    <span className="text-lg font-bold text-gray-500">?</span>
                )}
                <p className="text-2xl font-bold ml-4">{chatbot.name}</p>
            </div>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <ChatBox chatBotId={chatbot.id} />
            </div>
            <div style={{ flex: 2, }}>
                <center>
                    <ChatInput chatroomId={chatbot.id} />
                </center>
            </div>
        </div>
    );
}