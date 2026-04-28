import type { Metadata } from "next";
import "./globals.css";
import Galaxy from "../components/ui/Galaxy";
import Particles from "../components/ui/Particles";
import { poppins } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";

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
        <Analytics />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
