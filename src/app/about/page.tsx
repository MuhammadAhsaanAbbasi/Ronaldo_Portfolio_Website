import Image from 'next/image'
import Layout from '../component/layout'
import style from "../layout.module.css"
import { Aboutme, Career } from '../component/server'

export default function Home(){
    return(
        <>
        <Layout>
        <title>About Me</title>
        <Aboutme/>
        <Career/>
        <section className='my-12 mb-0 bg-blue-100 max-sm:my-4'>
            <h1 className='flex p-5 text-3xl font-bold justify-center text-center font-["Baloo_Bhai"]'>Awards</h1>
            <div className='flex justify-between items-center p-12 max-xl:flex-col max-xl:h-[90%]'>
                <Image className='w-[60vw] h-[60vh] object-cover max-xl:w-[60%] max-xl:h-[60%]'
            src={"/images/fifa2.jpg"}
            height={400}
            width={400}
            alt='ronaldo'
            /> 
            <p className='p-8 pl-20 w-[80%] h-[80%] max-sm:pl-10 text-lg font-semibold font-["Times_New_Roman"]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem magni animi dolorem explicabo nam vel eius facere. Dolorem maxime reprehenderit error blanditiis? Officiis voluptates corrupti veritatis corporis illo culpa quam quaerat unde? Maiores natus reprehenderit ducimus error doloremque atque ea neque architecto aut, earum, magni velit dolor optio ut blanditiis assumenda repellendus laborum quod animi voluptate? Quibusdam voluptatem, eveniet atque aspernatur fuga magnam odio.</p>
            </div>
            <div className='flex justify-between items-center p-12 max-xl:flex-col max-xl:h-[90%]'>
                <Image className='w-[60vw] h-[60vh] object-cover max-xl:w-[60%] max-xl:h-[60%]'
            src={"/images/award.jpg"}
            height={400}
            width={400}
            alt='ronaldo'
            /> 
            <p className='p-8 pl-20 w-[80%] h-[80%] max-sm:pl-10 text-lg font-semibold font-["Times_New_Roman"]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem magni animi dolorem explicabo nam vel eius facere. Dolorem maxime reprehenderit error blanditiis? Officiis voluptates corrupti veritatis corporis illo culpa quam quaerat unde? Maiores natus reprehenderit ducimus error doloremque atque ea neque architecto aut, earum, magni velit dolor optio ut blanditiis assumenda repellendus laborum quod animi voluptate? Quibusdam voluptatem, eveniet atque aspernatur fuga magnam odio.</p>
            </div>
        </section>
        </Layout>
        </>
    )
}