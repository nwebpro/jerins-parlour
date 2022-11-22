import React from 'react'
import facial from '../../../assets/fasial.png'
import CountUp from 'react-countup'

const Facial = () => {
    return (
        <section className='bg-theme-secondary py-20 md:py-[100px] lg:pt-[127px] lg:pb-[152px] px-4 lg:px-0 '>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
                <img className='text-center w-full ' src={ facial } alt="" />
                <div className='lg:ml-[78px]'>
                    <h3 className='font-semibold text-[34px] leading-[43px] tracking-[0.4px] mb-8'>Let us handle your <br /> screen <span className='text-theme-primary'>Professionally</span>.</h3>
                    <p className='text-sm leading-6 tracking-[0.4px] text-black/70 lg:pr-12 mb-[69px]'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h2 className='font-bold text-[42px] leading-[60px] text-theme-primary tracking-[1%] mb-4'><CountUp end={500} delay={2} />+</h2>
                            <p className='text-black text-base leading-6 font-normal tracking-[0.5%]'>Happy Customer</p>
                        </div>
                        <div>
                            <h2 className='font-bold text-[42px] leading-[60px] text-theme-primary tracking-[1%] mb-4'><CountUp end={16} delay={2} />+</h2>
                            <p className='text-black text-base leading-6 font-normal tracking-[0.5%]'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facial;