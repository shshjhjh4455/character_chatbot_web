import { getChatbotName } from "app/utils/msgdb";

export default async function ChatBotName({chatroomId} : {chatroomId : string}) {
    const name = await getChatbotName(chatroomId);;

    return (
        <h1>{name}</h1>
    );
}