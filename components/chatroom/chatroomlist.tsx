// "use client";

// import Link from "next/link";
// import { useChatRooms } from "app/hooks/useChat";


// export default function ChatRoomList() {
//     const styles = {
//         backgroundColor: "#f0f0f0",
//         margin: "5px",
//         padding: "10px",
//         border: "1px solid #000",
//     };

//     const chatrooms = useChatRooms().data?.chatrooms || [];

//     return (
//         <div style={{ flex: 3, padding: '5px', height: '300px', maxHeight: '300px', overflowY: 'scroll' }}>
//             {chatrooms.map((chatroom) => (
//                 <div className={""}
//                  key={chatroom.chatbotId}>
//                     <Link prefetch href={`./${chatroom.chatbotId}`}>{chatroom.chatbot.name}</Link>
//                     <p>Last msg : {chatroom.messages[0]?.msg} </p>
//                 </div>
//             ))}
//         </div>
//     );
// }