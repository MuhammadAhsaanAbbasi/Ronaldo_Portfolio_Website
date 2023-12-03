import Image from 'next/image'
import Layout from '../component/layout'
import Link from 'next/link'
import { Partners } from '../component/client'

export default function Home(){
    return(
        <Layout>
            <title>Partners</title>
            <Partners/>
    </Layout>
    )
}