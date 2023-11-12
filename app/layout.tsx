import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "پروژه تیارا راه",
  description: "پلتفرم تخصصی کار روی ذهن نا خودآگاه کودکان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={""}>header {children} footer</body>
    </html>
  );
}
