"use client"
import { Provider } from "react-redux"
import "../styles/index.scss"
import store from "@/redux/store"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="A Tutor Webiste" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,500,600,700i&display=swap" />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
