import ChatBox from "components/chatroom/chatbox";
import ChatRoomList from "components/chatroom/chatroomlist";
import { getChatBot } from "app/utils/db/chatbotdb";
import ChatInput from "components/chatroom/chatinput";

export default async function ChatbotPage({params} : {params : {chatbotId : string}}) {
    const chatbot = await getChatBot(params.chatbotId);

    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <center>
                <h1>{chatbot.name}</h1>
            </center>
            <div style={{ flex: 8, display: "flex", flexDirection: "row" }}>
                <ChatBox chatBotId={chatbot.id}/>
                <ChatRoomList />
            </div>
            <div style={{flex : 2}}>
                <center>
                    <ChatInput chatroomId={chatbot.id} />
                </center>
            </div>
        </div>
    );
}