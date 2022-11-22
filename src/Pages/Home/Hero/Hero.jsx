import React from 'react'
import Button from '../../../Component/Button/Button'
import hero from '../../../assets/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='bg-theme-secondary pb-[38px] px-4 lg:px-0'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-36 items-center pt-10 md:pt-0'>
                <div className='md:text-center lg:text-left'>
                    <h1 className='text-4xl leading-[50px] md:text-5xl font-bold font-poppins md:leading-[60px] mb-6'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className='font-normal md:px-40 lg:px-0 lg:pr-10 text-base font-poppins leading-6 mb-7 md:mb-10'>Professionally seize inexpensive experiences rather than client-centered web services. Efficiently impact an expanded array of partnerships via.</p>
                    <Link to='/appointment'>
                        <Button btnText={'Get an Appointment'} classes={'py-3 px-8 font-medium'} />
                    </Link>
                </div>
                <img className='text-center w-full ' src={ hero } alt="" />
            </div>
        </section>
    );
};

export default Hero;