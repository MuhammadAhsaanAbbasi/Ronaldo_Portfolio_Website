import Image from 'next/image'
import Layout from '../component/layout'
import Link from 'next/link'
import { Brands } from '../component/client'


export default function Home(){
    return(
        <Layout>
            <title>Brands</title>
            <Brands/>
    </Layout>
    )
}

//  <TypeWriter
//             textStyle={{ fontFamily: 'Red Hat Display' }}
//             startDelay={100}
//             cursorColor="black"
//             text="This is a single text"
//             typeSpeed={100}
//             scrollArea={myAppRef}
//           />
