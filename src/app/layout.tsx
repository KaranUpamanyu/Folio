import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <main className="w-full mx-auto px-8 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl relative">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
