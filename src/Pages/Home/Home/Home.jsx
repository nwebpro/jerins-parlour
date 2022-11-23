import React from 'react'
import useSetTitle from '../../../Hooks/useSetTitle'
import Facial from '../Facial/Facial'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    useSetTitle('Home')
    return (
        <main>
            <Hero />
            <Services />
            <Facial />
            <Testimonials />
        </main>
    );
};

export default Home