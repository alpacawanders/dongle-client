import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/common/layout/Header";
import Footer from "@/components/common/layout/Footer";

export const metadata: Metadata = {
  title: "동글",
  description: "우리의 동아리, 우리의 동글",
  metadataBase: new URL("https://dongle.world/"),
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
    <html lang="ko">
      <body className={`${pretendard.className}`}>
        <main>
          <Header />
          <div className="m-[0_auto] min-h-screen w-full max-w-[960px] py-20">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
