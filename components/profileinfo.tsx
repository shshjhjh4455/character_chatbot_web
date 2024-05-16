import { getChatBot } from "app/utils/db/chatbotdb";


export default async function ProfileInfo({chatBotId}: {chatBotId: string}) {
  const res = await getChatBot(chatBotId);
  return(
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      <h1 className="mx-auto flex flex-col py-10 text-6xl">{res.name}</h1>
      <div className="text-3xl py-5">{res.description}</div>
      <a className="inline-flex text-white bg-green-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-green-600 rounded text-lg" href={`/chatbot/` + res.id}>Chat!</a>
    </div>
  );
}