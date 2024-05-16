


import Chat from "app/chat/page";
export default function ChatroomPage({ params: { chatroomId } }) {
  return <Chat chatroomId={chatroomId} />;
}

/*

export default function ChatroomPage({ params }) {
  const { chatroomId } = params;

  return <Chat chatroomId={chatroomId} />;
}
*/