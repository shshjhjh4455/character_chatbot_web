import Provider from "../components/provider"

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
    <html lang="en">
      <Provider><body>{children}</body></Provider>
    </html>
  )
}
