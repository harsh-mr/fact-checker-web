import "./css/style.css";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
// import './globals.css'

import { headers } from "next/headers";
import ContextProvider from "@/context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Fact Checker",
  description: "Zero-Knowledge Proof Framework for Verifiable Fact-Checking",
};

const cookies = headers().get("cookie");
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <ContextProvider cookies={cookies}>
          <div className="Simpleflex flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
            <Banner />
          </div>
        </ContextProvider>
        <GoogleAnalytics gaId="G-5ZX3V137HF" />
      </body>
    </html>
  );
}
