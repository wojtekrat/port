import Socials from "../components/socials/Socials"
import Navbar from "../components/navbar/Navbar"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-r from-zinc-900 via-stone-900 to-zinc-900 text-white">
        <head>
          <title>Wojciech Ratajczak</title>
        </head>
        <body>
          <header>
            <Navbar />
          </header>
            {children}
        </body>
    </html>
  )
}
