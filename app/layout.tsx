import type { Metadata } from "next";
import "./assets/globals.css";
import { ContentArea, Navbar, SideMenu } from "@/components/core";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "پروژه تیارا راه",
  description: "پلتفرم تخصصی کار روی ذهن نا خودآگاه کودکان",
};

const IRANSansX = localFont({
  src: [
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-UltraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Light.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/IRANSansX/IRANSansX-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={IRANSansX.className}>
        <SideMenu />{" "}
        <ContentArea>
          <Navbar />
          <div className="pt-5">{children}</div>
        </ContentArea>
      </body>
    </html>
  );
}
