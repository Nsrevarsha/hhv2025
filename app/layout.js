import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/footer.css";
import Footer from './components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WTM REC Hackathon 2024 - Y2K Edition",
  description: "Join us for the ultimate 2000s-themed hackathon experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
