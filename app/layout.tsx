import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "basic-app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" dir="ltr" className={`${inter.className} min-h-screen`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
