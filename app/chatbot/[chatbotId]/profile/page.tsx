import ProfileInfo from "components/profileinfo";
import { getChatBot } from "app/utils/db/chatbotdb";

export default async function Profile({params} : {params : {chatbotId : string}}) {
  const chatbot = await getChatBot(params.chatbotId);
  
  return (
  <>
  <ProfileInfo chatBotId={chatbot.id}/>
  </>
  )
}