import { MobileMenu } from './helper/MobileMenu'

import { useNavigate } from 'react-router'
import { useState } from 'react';

export function Header({logoImg='/logo.svg',links=['link1','link2','link3','link4',],btnName="Let's Talk",sticky=true,lightTheme=true}){


    const [menuOpen, setMenuOpen ] = useState(false)
	const navigate = useNavigate()

	function handleNav(path){
		navigate(path)
	}

    return ( 
        <>
			<div className={`flex justify-between mx-auto md:justify-around items-center px-3 py-12 h-16 ${lightTheme ? 'bg-secondaryColor text-primaryColor': 'bg-primaryColor text-secondaryColor'} ${sticky ? 'sticky top-0 z-50' : null}`}>
				<div className="flex justify-center items-center gap-2 cursor-pointer" onClick={()=>{handleNav("/")}}>
					<img src={logoImg} alt='logo' className='w-16 h-16'/>
				</div>
				
                <nav className="hidden md:flex md:space-x-10 lg:space-x-20 text-sm ">
                
                    {links.map((link,index)=>{
                        return (
                            <div key={index} className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 dark:hover:after:bg-secondaryColor hover:after:bg-secondaryColor text-base max-[500px]:text-xs" onClick={()=>{handleNav(`/${link}`)}}>
                                {link}
                            </div>
                        )
                    })}
                </nav>
                <div id="contact_Btn" className="cursor-pointer md:flex border border-secondaryColor text-secondaryColor px-10 py-2 hover:bg-secondaryColor  hover:text-primaryColor transition duration-700 ease-in-out bg-primaryColor hidden" >
                    {btnName}
                </div>

                <div className="md:hidden">
                    <svg
                        onClick={() => setMenuOpen(!menuOpen)} 
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
            	    {menuOpen && <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
                </div>			

				
			</div>
		</>
    )
}