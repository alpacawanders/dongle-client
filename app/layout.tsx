import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "동글",
  description: "우리의 동아리, 우리의 동글",
};
const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
