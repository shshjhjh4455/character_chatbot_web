import { getChatBots } from "app/utils/db/chatbotdb";
// import ProfileInfo from "components/profileinfo";
import Link from "next/link";
import styles from "styles/chatroomlist.module.css";

export default async function ChatBotPage() {
    const chatBots = await getChatBots();

    return (
        // <div>
        //     {chatBots.map((chatBot) => (
        //         <ProfileInfo key={chatBot.id} chatBotId={chatBot.id} />
        //     ))}
        // </div>
        <div className={`${styles.roomBody} p-12`}>
            <div className={`${styles.roomNav} text-center`}>채팅방 목록</div>
            <div className="flex-1 overflow-y-auto">
                {chatBots.map((chatroom) => (
                    <Link key={chatroom.id} href={`/chatbot/${chatroom.id}`}>
                        <div className={`${styles.roomList} justify-center`}>
                            <div className={`${styles.roomTitle} items-center`}>
                                <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                                    {chatroom.image ? (
                                        <img src={chatroom.image} alt={chatroom.name} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        <span className="text-lg font-bold text-gray-500">?</span>
                                    )}
                                </div>
                                {chatroom.name}
                            </div>
                            <div className={styles.memberNumber}>1</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}