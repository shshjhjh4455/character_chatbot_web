import { getChatBot } from "app/utils/chatbotdb";

export default async function ProfileInfo({chatBotId}: {chatBotId: string}) {
  const res = await getChatBot(chatBotId);
  return(
    <div>
      <h1>{res.name}</h1>
      <div>{res.description}</div>
      <a href={`/chatbot/` + res.id}>Chat!</a>
    </div>
  );
}