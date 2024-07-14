import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe",
  description: "Os melhores cursos de programação gratuidos com a melhor \
    experiência de aprendizado e foco.",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> { }
export default function RootLayout({children}: IRootLayout) {
  return (
    <html lang="pt-br" >
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
