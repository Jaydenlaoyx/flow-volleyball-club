import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Flow Volleyball Club",
    template: "%s | Flow Volleyball Club",
  },
  description:
    "Weekly volleyball training in Melbourne focused on skill development, structured gameplay and community.",
  keywords: [
    "volleyball Melbourne",
    "volleyball training Melbourne",
    "volleyball club Melbourne",
    "Flow Volleyball Club",
    "volleyball coaching Melbourne",
  ],
  authors: [
    {
      name: "Flow Volleyball Club",
    },
  ],
  openGraph: {
    title: "Flow Volleyball Club",
    description:
      "Weekly volleyball training in Melbourne focused on skill development, structured gameplay and community.",
    type: "website",
    locale: "en_AU",
    siteName: "Flow Volleyball Club",
    images: [
      {
        url: "/flow-og.png",
        width: 1200,
        height: 630,
        alt: "Flow Volleyball Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Volleyball Club",
    description:
      "Weekly volleyball training in Melbourne focused on skill development, structured gameplay and community.",
    images: ["/flow-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}