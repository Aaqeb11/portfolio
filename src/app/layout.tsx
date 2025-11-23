import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Galaxy from "../components/ui/Galaxy";
import Particles from "../components/ui/Particles";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Aaqeb's Portfolio",
  description: "Portfolio of the legendary developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ backgroundColor: "black", overflowX: "hidden" }}
      >
        <div className="">{children}</div>
      </body>
    </html>
  );
}
