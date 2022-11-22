import React from 'react'

const Service = ({ service }) => {
    const { name, price, details, image } = service
    return (
        <div className='bg-white text-center pt-9 pl-12 pr-10 cursor-pointer hover:shadow-shadow pb-4 transition-all duration-200 rounded-[10px]'>
            <div className='mb-5 w-[72px] h-[72px] bg-[#F73E7B]/10 rounded-full flex justify-center items-center mx-auto'>
                <img src={ image } alt="" />
            </div>
            <h3 className='text-theme-text font-poppins font-semibold text-lg leading-4 mb-[18px]'>{ name }</h3>
            <h4 className='text-theme-primary font-poppins text-lg leading-4 font-medium mb-2'>${ price }</h4>
            <p className='font-poppins text-base leading-7 font-light tracking-[0.4px]'>{ details }</p>
        </div>
    );
};

export default Service;