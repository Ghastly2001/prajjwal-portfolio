import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "@/components/navbar";
import BlackBar from "@/components/black-bar";
import DownloadResume from "@/components/download-resume";
const fhGiselle = localfont({
  src: [
    {
      path: "/fonts/FHGiselleTest-Regular-BF651251618a450.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/FHGiselleTest-Medium-BF65125161a3299.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/FHGiselleTest-SemiBold-BF6512516196777.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/FHGiselleTest-Bold-BF651251616cfe1.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const gilroy = localfont({
  src: [
    {
      path: "/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--gilroy",
});
export const metadata: Metadata = {
  title: "Prajjwal Portfolio",
  description: "Prajjwal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fhGiselle.className} ${gilroy.variable} antialiased bg-[#F9F6EF]`}
      >
        <Navbar />
        <main className="mt-[80px] text-[#333333] bg-[#F9F6EF]">
          <div className="absolute w-[52px] h-[165px] right-0 top-32 hidden lg:block">
            <DownloadResume />
          </div>

          {children}
        </main>
        <BlackBar />
      </body>
    </html>
  );
}
