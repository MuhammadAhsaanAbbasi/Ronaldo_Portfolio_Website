
import Layout from './component/layout'
import {Hero, Brands, Partners} from './component/client';
import { Aboutme, Career} from './component/server';

export default function Home() {
    return (
        <>
            <Layout>
                <title>Home Page</title>
                <Hero/>
                <Aboutme/>
                <Career/>
                {/* brands */}
                <Brands/>
                {/* # Partners */}
                <Partners/>
            </Layout>
        </>
    )
}

// https://www.7egend.cr/