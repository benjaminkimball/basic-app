import { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "basic-app",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-US" dir="ltr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
