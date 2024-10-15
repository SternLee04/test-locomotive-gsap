import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

export const runtime = "edge";

export const metadata = {
  title: "Portfolio",
  description: "portfolio of jay vadalia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
