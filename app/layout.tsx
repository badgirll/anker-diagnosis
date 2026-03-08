import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ankerのタイプ診断 | 電源の処方箋",
  description: "あなたにぴったりのAnker充電器とモバイルバッテリーを診断",
  openGraph: {
    title: "Ankerのタイプ診断 | 電源の処方箋",
    description: "あなたにぴったりのAnker充電器とモバイルバッテリーを診断",
    images: ["/ogp.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankerのタイプ診断 | 電源の処方箋",
    description: "あなたにぴったりのAnker充電器とモバイルバッテリーを診断",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
