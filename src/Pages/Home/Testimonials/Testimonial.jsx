import React from 'react'
import review from '../../../assets/review.png'
import { BsStarFill } from 'react-icons/bs'

const Testimonial = () => {
    return (
        <div className='px-5 py-10'>
            <div className='flex gap-5 items-center mb-4'>
                <img src={ review } className='w-16 h-16' alt="" />
                <div>
                    <h3 className='text-black text-lg font-semibold leading-[30px]'>Nash Patrik</h3>
                    <p className='text-black text-base leading-6 font-medium'>CEO, Manpol</p                                           >
                </div>
            </div>
            <p className='text-[#707070] text-base leading-7 tracking-[0.5%] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
            <div className='flex gap-[9px]'>
                {
                    [...Array(5)].map((_, i) => (
                        <BsStarFill className='text-[#FFAC0C] text-xl' />
                    ))
                }
            </div>
        </div>
    );
};

export default Testimonial;