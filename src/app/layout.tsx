import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const epundaz = localFont({
  src: [
    {
      path: "../fonts/Epunda.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/EpundaI.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

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
      <body className={epundaz.className} style={{ backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  );
}
