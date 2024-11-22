import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google font: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Include specific weights
  variable: "--font-poppins", // Use a CSS variable for easier application
  display: "swap", // Improves loading behavior
});

export const metadata: Metadata = {
  title: "Radiant App",
  description: "Created by Keila Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
