import { getChatBots } from "app/utils/chatbotdb";
import ProfileInfo from "components/profileinfo";

export default async function ChatBotPage() {
    const chatBots = await getChatBots();

    return (
        <div>
            {chatBots.map((chatBot) => (
                <ProfileInfo key={chatBot.id} chatBotId={chatBot.id} />
            ))}
        </div>
    )
}