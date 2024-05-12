import Provider from "components/provider/sessionProvider"
import Navigation from "components/navigation"

export const metadata = {
  title: 'Character Chatbot',
  description: 'Capstone 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Provider><Navigation/><body>{children}</body></Provider>
    </html>
  )
}
