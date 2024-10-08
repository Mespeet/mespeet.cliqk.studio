import type { Metadata } from "next";
import "./globals.css";

import {Providers} from "./providers";

import Header from "@/components/layout/header"

import Sidebar from "@/components/layout/sidebar"


export const metadata: Metadata = {
  title: "Mespeet",
  description: "Maarten Speet Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`antialiased`}>
        <Providers>
          <div className="mt-8 grid grid-cols-3 grid-rows-1 items-start justify-items-center min-h-screen gap-8 font-[family-name:var(--font-geist-sans)]">
            <div></div>
            <main className="flex flex-col gap-8 items-center sm:items-start">
              <Header />
              {children}
            </main>
            <div className="relative w-full grid justify-items-center">
              <Sidebar className="fixed" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
