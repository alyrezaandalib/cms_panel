import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/Commons/Sidebar";
import { cookies, headers } from "next/headers";
import Nav from "@/components/Commons/Header/nav";
import MobileTabs from "@/components/Commons/Header/mobileTabs";
import Content from "@/components/Content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS",
  description: "CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"bg-secondary"}>
      <body>
        {/*// ** navbar*/}
        <Nav
          theme={
            cookies().has("theme") ? cookies().get("theme")?.value : "light"
          }
        />
        {/*// ** content */}

        <Content content={children} />

        {/*// ** mobileTabs*/}
        <div
          className={
            "flex xl:hidden justify-center items-center w-full fixed bottom-0"
          }
        >
          <MobileTabs />
        </div>
      </body>
    </html>
  );
}
