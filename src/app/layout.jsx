import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar/NavBar";
import UserProvider from "@/Context/UserContext";
import RoomProvider from "@/Context/RoomContect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LuxStay",
  description: "Hotel Booking App",
   icons: {
    icon: '/public/favicon.ico',
  },
};


export default function RootLayout({ children }) {
  return (
    <html

      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning  className="min-h-full flex flex-col">
        <RoomProvider>

        <UserProvider>

          <NavBar />

          <main className="flex-1">
            {children}
          </main>

        </UserProvider>
        </RoomProvider>

      </body>
    </html>
  );
}