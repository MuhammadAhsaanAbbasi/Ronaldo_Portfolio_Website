import Image from "next/image"
import Link from "next/link"

export function Aboutme() {
    return (
        <>
                        <section className='my-12 mb-0 bg-blue-100 max-xl:mt-12'>
                    <h1 className='flex p-5 text-4xl font-bold justify-center text-center font-["Baloo_Bhai"]'>About Me</h1>
                    <div className='flex justify-between items-center p-12 max-xl:flex-col max-xl:h-auto'>
                        <Image className='w-[60vw] h-[60vh] object-cover max-xl:w-[60%] max-xl:h-[60%]'
                            src={"/images/profile.jpg"}
                            height={400}
                            width={400}
                            alt='ronaldo'
                        />
                        <p className='p-8 pl-20 w-[70%] h-[70%] max-xl:pl-14 max-md:pl-10 max-sm:pl-6 max-xl:w-auto max-xl:h-auto font-semibold font-["Times_New_Roman"]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quidem magni animi dolorem explicabo nam vel eius facere. Dolorem maxime reprehenderit error blanditiis? Officiis voluptates corrupti veritatis corporis illo culpa quam quaerat unde? Maiores natus reprehenderit ducimus error doloremque atque ea neque architecto aut, earum, magni velit dolor optio ut blanditiis assumenda repellendus laborum quod animi voluptate? Quibusdam voluptatem, eveniet atque aspernatur fuga magnam odio.</p>
                    </div>
                </section>
        </>
    )
}
export function Career() {
    return (
        <>
            <section className='my-12 mb-0 bg-blue-100 max-xl:mt-5'>
                    <h1 className='flex p-5 text-4xl font-bold justify-center text-center font-["Baloo_Bhai"]'>Carrer HighLights</h1>
                    <div className='flex justify-between items-center p-12 max-xl:flex-col max-xl:h-[90%]'>
                        <iframe
                            className='w-[60vw] h-[60vh] object-cover max-xl:w-[50vw] max-xl:h-[50vh] transition-transform hover:translate-x-8 hover:scale-[1.15] max-xl:hover:translate-x-0 max-xl:hover:scale-[1.5]'
                            src="https://www.youtube.com/embed/2lux_E5bt5Q?si=ZAk16pOwECP-U8eR"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <div className='p-8 pl-20 w-[70%] h-[70%] max-xl:pl-14 max-md:pl-10 max-sm:pl-6 max-xl:w-auto max-xl:h-auto  font-semibold font-["Times_New_Roman"]'>
                            <h1>2022</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis rerum ea? Consequatur quidem iste incidunt itaque eveniet dolorum, ab, cumque ratione veritatis odio assumenda doloremque quos reiciendis laborum. Architecto rerum error asperiores, dolor nemo facilis odio ipsum iure aliquid illo! Nemo temporibus facilis dolores. Quas alias unde repellat. Explicabo minus, est voluptatibus harum nemo porro corporis vitae iusto soluta natus nihil ut dolor. Rem maiores consectetur tempore quasi? Minima sequi pariatur deserunt aliquam doloribus.</p>
                        </div>
                    </div>
                    <h1 className='flex p-5 text-4xl font-bold justify-center text-center font-["Baloo_Bhai"]'>After Struggling</h1>
                    <div className='flex justify-between items-center p-12 max-xl:flex-col max-xl:h-[90%]'>
                        <video src="/images/nassar.mp4" controls loop poster='/images/al nassr.jpg' className='w-[60vw] h-[60vh] object-cover max-xl:w-[50vh] max-xl:h-[50vh] transition-transform hover:translate-x-8 hover:scale-[1.15] max-xl:hover:translate-x-0 max-xl:hover:scale-[1.5]'></video>
                        <div className='p-8 pl-20 w-[80%] h-[70%] max-xl:pl-14 max-md:pl-10 max-sm:pl-6 max-xl:w-auto max-xl:h-auto  font-semibold font-["Times_New_Roman"]'>
                            <h1>2023</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis rerum ea? Consequatur quidem iste incidunt itaque eveniet dolorum, ab, cumque ratione veritatis odio assumenda doloremque quos reiciendis laborum. Architecto rerum error asperiores, dolor nemo facilis odio ipsum iure aliquid illo! Nemo temporibus facilis dolores. Quas alias unde repellat. Explicabo minus, est voluptatibus harum nemo porro corporis vitae iusto soluta natus nihil ut dolor. Rem maiores consectetur tempore quasi? Minima sequi pariatur deserunt aliquam doloribus.</p>
                        </div>
                    </div>
                </section>
        </>
    )
}

