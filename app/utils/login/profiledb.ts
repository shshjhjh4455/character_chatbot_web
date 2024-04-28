import {prisma} from "app/utils/prisma";



export async function getChatBotName(chatBotId : string) {
  const name = await prisma.chatBot.findUniqueOrThrow({
    where: {
      id : chatBotId,
    },
  }).then((res)=>{
    return res.name;
  });

  return name;
}

export async function getChatBotDes(chatBotId : string) {
  const des = await prisma.chatBot.findUniqueOrThrow({
    where: {
      id : chatBotId,
    },
  }).then((res)=>{
    return res.description;
  });

  return des;
}

export async function getChatBotImg(chatBotId : string) {
  const img = await prisma.chatBot.findUniqueOrThrow({
    where: {
      id : chatBotId,
    },
  }).then((res)=>{
    return res.image;
  });

  return img;
}

