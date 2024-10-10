"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/view/Navbar";

import { Store } from "@/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Xplore Finance",
//   description: "Its about stock market Education",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={Store}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
