import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xplore Finance",
  description: "Its about stock market Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-h-screen overflow-x-hidden max-w-full bg-background text-foreground antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
