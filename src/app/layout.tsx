import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import StoreProvider from "./storeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile.fyi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="w-full shadow-sm fixed top-0 left-0 z-20 bg-white">
            <Navbar />
          </div>
          {children}
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
