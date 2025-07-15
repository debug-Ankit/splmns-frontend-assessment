import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPLMNS",
  description: "SPLMNS frontend assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="p-4 flex flex-col gap-6 items-center justify-center h-screen bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
