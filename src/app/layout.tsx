import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "../../redux/providers";
import NavBar from "@/components/NavBar";
import ButtonDatabase from "@/components/ButtonDatabase";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rick n Morty APP",
  description: "Proyecto prueba consumiendo API gratuita de Rick y Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="pt-20">
            <NavBar>
              {children}
              <ButtonDatabase/>
            </NavBar>
          </div>
        </Providers>
      </body>
    </html>
  );
}