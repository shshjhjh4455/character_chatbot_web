import ProfileInfo from "components/profileInfo";

interface ProfilePageProps {
  params: {
    chatBotId: string;
    chatBotName: string;
    chatBotDescription: string;
  }
}

export default function ProfilePage({params: {chatBotId}}: ProfilePageProps) {
  return (
    <div>
      <ProfileInfo chatBotId={chatBotId}/>
    </div>
  )
}