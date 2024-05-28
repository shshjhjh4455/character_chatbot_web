import Provider from "components/provider/sessionProvider"
import Navigation from "components/navigation"
import Footer from "components/footer"
import './globals.css'
import Head from 'next/head';

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
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
