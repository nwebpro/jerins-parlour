import React from 'react'
import useSetTitle from '../../../Hooks/useSetTitle';
import Hero from '../Hero/Hero';

const Home = () => {
    useSetTitle('Home')
    return (
        <main>
            <Hero />
        </main>
    );
};

export default Home