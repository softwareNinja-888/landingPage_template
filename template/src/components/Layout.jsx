import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout(){
    const links = ['About','Services','Testimonials','Contact']
    return (
        <div className="">
            <Header logoImg='/svgLogo/logo3.svg' links={links} btnName="Let's Chat" sticky={true} />
            <Outlet/>
            <Footer/>
        </div>
    )
}