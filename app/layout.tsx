import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow Volleyball Club",
  description:
    "Community volleyball training in Melbourne for players looking to learn, improve and enjoy the game.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}