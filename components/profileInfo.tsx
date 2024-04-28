import { getChatBotName } from "app/utils/login/profiledb";
import { getChatBotDes } from "app/utils/login/profiledb";
import { getChatBotImg } from "app/utils/login/profiledb";

export default async function ProfileInfo({chatBotId}: {chatBotId: string}) {
  const name = await getChatBotName(chatBotId);
  const des = await getChatBotDes(chatBotId);
  const img = await getChatBotImg(chatBotId)
  return(
    <div>
      <h1>{name}</h1>
      <div>{des}</div>
    </div>
  );
}