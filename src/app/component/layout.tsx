"use client"
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMobile, setIsMobile] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobile(!isMobile);
    };
    return (
        <main>
            <header className="flex p-2 top-0 sticky justify-between items-center before:bg-slate-500 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1] before:opacity-5 max-sm:static">
                <div className="pl-10 px-1 py-3 invert max-md:fixed top-3 left-3 max-sm:pl-6">
                    <Link href={"/"}><Image
                        src={"https://www.cristianoronaldo.com/assets/logos/cr7.svg"}
                        height={150}
                        width={150}
                        alt='yourname'
                    /></Link>
                </div>
                <div className="md:hidden inline-block items-end pl-32 align-middle top-3 right-3 fixed" onClick={toggleMobileMenu}>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                    <div className='line h-0.5 w-6 my-1 bg-black'></div>
                </div>
                <ul className={`flex p-1 pr-11 max-sm:text-xs max-sm:px-2 max-sm:pb-2 ${isMobile ? "flex-col w-auto translate-x-[200px]":"w-aut0 max-md:hidden"}`}>
                    <li className="p-4 my-1  transition-all duration-500 hover hover:bg-black hover:cursor-pointer hover:text-white hover:rounded-2xl font-['Baloo_Bhai'] text-lg"><Link href={"/"}>Home</Link></li>
                    <li className="p-4 my-1  transition-all duration-500 hover hover:bg-black hover:cursor-pointer hover:text-white hover:rounded-2xl font-['Baloo_Bhai'] text-lg"><Link href={"./about"}>About</Link></li>
                    <li className="p-4 my-1  transition-all duration-500 hover hover:bg-black hover:cursor-pointer hover:text-white hover:rounded-2xl font-['Baloo_Bhai'] text-lg"><Link href={"./brands"}>Brands</Link></li>
                    <li className="p-4 my-1  transition-all duration-500 hover hover:bg-black hover:cursor-pointer hover:text-white hover:rounded-2xl font-['Baloo_Bhai'] text-lg"><Link href={"./partners"}>Partners</Link></li>
                </ul>
            </header>
            {children}
            <footer className='flex bg-black text-white items-center justify-center p-2 max-sm:text-sm'>
                <div>
                    <p>www.cristianoronaldo.com - Copyright Reserved</p>
                </div>
            </footer>
        </main>
    )
}

// className={style.navbar}
// className={style.item}

// flex p-2 top-0 sticky justify-between items-center before:bg-slate-500 before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[1] before:opacity-5