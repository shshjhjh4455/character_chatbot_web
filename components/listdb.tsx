import { prisma } from "app/utils/prisma";
/*
export async function MessageByChatroomfinId(chatroomId : string) {
    return await prisma.chatBot.findMany({   
    });
}
*/

export async function getChatrooms() {
    // prisma.chatBot.findMany()를 사용하여 채팅방 목록 가져옴
    const chatrooms = await prisma.chatBot.findMany();
    return chatrooms; // 채팅방 목록 반환
  }

 /*
  import { getServerSession } from "next-auth"; // getServerSession 임포트

  export async function getChatRooms(req: any) {
    const session = await getServerSession(req); // 요청으로부터 세션 가져오기
    const id = session.user.id; // 세션에서 사용자 ID 추출
    const chatrooms = await prisma.chatBot.findMany({ // 사용자에 대한 채팅방 찾기
      where: {
        userId: id, // 사용자 ID로 필터링
      },
    });
    return chatrooms;
  }
  */