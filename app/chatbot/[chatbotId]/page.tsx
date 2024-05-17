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
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
                <center>
                    <div style={{marginTop:'20px'}}>
                        {chatbot.image ? (
                            <img src={chatbot.image} alt={chatbot.name} style={imgStyle} />
                        ) : (
                            <span className="text-lg font-bold text-gray-500">?</span>
                        )}
                        <h1 style={{marginTop:'10px'}}>{chatbot.name}</h1>
                    </div>
                </center>
                <div style={{margin:"5vw",display:"flex" ,justifyContent:"space-between",}}>
                    <Backbtn/>
                    <ClearBtn chatroomId={chatbot.id} />
                </div>
            </div>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <ChatBox chatBotId={chatbot.id} />
            </div>
            <div style={{ flex: 2 , }}>
                <center>
                    <ChatInput chatroomId={chatbot.id} />
                </center>
            </div>
        </div>
    );
}