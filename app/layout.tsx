import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Sidebar from '../components/Commons/Sidebar'
import {cookies, headers} from 'next/headers';
import Nav from "@/components/Commons/Header/nav";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'CMS',
    description: 'CMS',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const pathName = headers().get("x-pathname")

    const showHeader = !pathName || !pathName.startsWith("/users/")

    return (
        <html lang="en" className={"bg-secondary"}>
        <body>
        {showHeader ? <Nav theme={cookies().has('theme') ? cookies().get('theme')?.value : 'light'}/> : ""}
        <div className={"flex flex-row flex-justify-start items-start"} style={{overflowY: "clip"}}>
            {pathName !== "/lhjkg" ?  <Sidebar/> :""}
            <section className={"flex flex-col flex-grow"}>
                {children}
            </section>
        </div>
        </body>
        </html>
    )
}
