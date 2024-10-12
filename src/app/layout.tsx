"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/view/Navbar";
import { Provider, useSelector } from "react-redux";
import { RootState, Store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Xplore Finance",
//   description: "It's about stock market education",
// };

const Layout: React.FC<{ children: React.ReactNode }> = (
  { children },
  className
) => {
  const dark = useSelector((state: RootState) => state.user.dark);
  return (
    <body
      className={cn(
        `max-h-screen overflow-x-hidden max-w-full bg-background text-foreground antialiased ${
          dark ? "dark" : "null"
        }`
      )}
    >
      <Navbar />
      {children}
    </body>
  );
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={Store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
