"use client"
import Link from 'next/link'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { useState } from 'react';

export function Hero() {
    return (
        <>
            <section className="flex flex-col-reverse lg:flex-row px-11 w-full h-[85vh] lg:h-auto lg:min-h-[85vh] py-36 mb-12 lg:mb-0 sm:py-28 max-sm:pl-8">
                <video src="/images/life goal.mp4" autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-50'></video>
                <div className='py-2 animate-wiggle'>
                    <h1 className='text-3xl py-2 font-bold font-["Baloo_Bhai"]'>Hello I'm</h1>
                    <h1 className='text-3xl py-2 font-bold font-["Baloo_Bhai"]'><Typewriter
                        options={{
                            strings: [
                                'Cristiano Ronaldo',
                                'Cristiano Ronaldo'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                    <p className='text-3xl bg-cover bg-clip-text text-transparent bg-gradient-to-r transition-all duration-1000 from-red-600 to-orange-500 hover:from-red-700 hover:to-yellow-500 font-["Baloo_Bhai"] transform'>The Goat FootBaller</p>
                    <div className="px-0">
                        <Link href="/about">
                            <h2 className='my-3 rounded-2xl p-3 w-40 bg-blue-950 text-white text-lg text-center font-["Baloo_Bhai"] hover:underline bg-gradient-to-r from-green-500 to-blue-600 transition-all duration-1000 hover:-translate-y-3 hover:from-red-600 hover:to-yellow-500'>{"Explore Journey"}</h2>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

interface ImageOverlayProps {
    setIsMobile: Function;
    isMobile: boolean;
    imageUrl: string;
    Postlink: string;
}

export function Brand({ imageUrl, Postlink, setIsMobile, isMobile }:ImageOverlayProps) {
    return (
        <div
                        className={`relative group hover:opacity-30 max-sm:h-[20vh] max-sm:w-[20wh]`}
                        onMouseEnter={() => setIsMobile(true)}
                        onMouseLeave={() => setIsMobile(false)}
                    >
                        <Link href={Postlink}>
                            <Image
                                className={`flex h-[40vh] w-[80vw] items-center justify-between object-contain p-5 pr-0 animate-updown transition duration-500 ease-in-out max-sm:h-[20vh] max-sm:w-[20wh]`}
                                src={imageUrl}
                                height={300}
                                width={300}
                                alt='ronaldo'
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className={`${isMobile ? 'bg-blue-500 shadow-md absolute justify-center items-center p-3 font-bold rounded-lg' : 'bg-blue-500 text-white hidden'} `}>Visit Website</p>
                            </div>
                        </Link>
                    </div>
    )
}

interface PartnerOverlayProps {
    imageUrl: string;
    Postlink: string;
    fill?:string;
}
export function Partner({ imageUrl, Postlink, fill }:PartnerOverlayProps){
    return(
        <Link href={Postlink}>
                        <Image className={`flex h-[30vh] w-[30vw] ${fill} items-center justify-between object-contain brightness-100 px-0 animate-updown max-sm:h-[15vh] max-sm:w-[15wh]`}
                            src={imageUrl}
                            height={100}
                            width={100}
                            alt='ronaldo'
                        />
                    </Link>
    )
}

export function Brands() {
    const [isMobile1, setIsMobile1] = useState(false);
    const [isMobile2, setIsMobile2] = useState(false);
    const [isMobile3, setIsMobile3] = useState(false);
    const [isMobile4, setIsMobile4] = useState(false);

    return (
        <>
            <section className='my-12 mb-0 bg-blue-100 max-xl:mt-5'>
                <h1 className='flex p-5 text-4xl font-bold justify-center text-center font-["Baloo_Bhai"]'>Brands</h1>
                <div className='flex justify-between items-center max-xl:flex-col'>
                    <Brand
                    setIsMobile={setIsMobile1}
                    isMobile={isMobile1}
                    imageUrl='/images/ursu.jpg'
                    Postlink='https://www.ursu9.es/#origin'
                    />
                    <Brand
                    setIsMobile={setIsMobile2}
                    isMobile={isMobile2}
                    imageUrl='/images/eye.jpg'
                    Postlink='https://www.cr7-eyewear.com/'
                    />
                    <Brand
                    setIsMobile={setIsMobile3}
                    isMobile={isMobile3}
                    imageUrl='/images/fragrances.jpg'
                    Postlink='https://www.cr7fragrances.store/'
                    />
                    <Brand
                    setIsMobile={setIsMobile4}
                    isMobile={isMobile4}
                    imageUrl='/images/footwear.jpg'
                    Postlink='https://www.cr7footwear.com/'
                    />

                </div>
            </section>
        </>
    )
}

export function Partners() {
    return (
        <>
            <section className='my-12 mb-0 bg-blue-100 max-xl:mt-5'>
                <h1 className='flex p-5 text-4xl font-bold justify-center text-center font-["Baloo_Bhai"]'>Partners</h1>
                <div className='flex justify-between items-center max-xl:flex-col'>
                    <Partner
                    imageUrl="/images/nike.png"
                    Postlink='https://www.nike.com/'
                    />
                    <Partner
                    imageUrl="https://www.cristianoronaldo.com/assets/images/partners/Logo_7egend.svg"
                    Postlink='https://www.7egend.cr/'
                    fill='invert'
                    />
                    <Partner
                    imageUrl="/images/clear.png"
                    Postlink='https://www.cristianoronaldo.com/'
                    />
                    <Partner
                    imageUrl="/images/binance.png"
                    Postlink='https://www.binance.com/en'
                    />
                </div>
            </section>
        </>
    )
}