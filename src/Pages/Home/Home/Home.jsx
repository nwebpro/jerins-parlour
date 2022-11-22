import React from 'react'
import useSetTitle from '../../../Hooks/useSetTitle';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    useSetTitle('Home')
    return (
        <main>
            <Hero />
            <Services />
        </main>
    );
};

export default Home