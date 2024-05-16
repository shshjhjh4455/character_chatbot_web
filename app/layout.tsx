import Provider from "components/provider/sessionProvider"
import Navigation from "components/navigation"
import Footer from "components/footer"
import './globals.css'

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
      <Provider>
        <body>
          <Navigation />
          {children}
          <Footer/>
        </body>
      </Provider>
    </html>
  )
}
