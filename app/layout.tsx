import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicMonthly",
  description: "Your Spotify music recap, wrapped and delivered to you, monthly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-black overflow-x-hidden ">
        {children}
      </body>
    </html>
  );
}
