import React from 'react'
import Service from './Service'
import makeup from '../../../assets/makeup.png'
import hair from '../../../assets/hair.png'
import facial from '../../../assets/facial.png'
import Button from '../../../Component/Button/Button'
import { Link } from 'react-router-dom'

const serviceData = [
    {
        name: 'Anti Age Face Treatment',
        price: 199,
        details: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        image: makeup
    },
    {
        name: 'Hair Color & Styleing',
        price: 99,
        details: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        image: hair
    },
    {
        name: 'Skin Care Treatment',
        price: 299,
        details: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        image: facial
    }
]

const Services = () => {
    return (
        <section className='mt-24 mb-14  container mx-auto px-4 lg:px-0'>
            <h2 className="text-center font-poppins text-theme-text font-bold text-4xl leading-10 mb-[72px]">Our Awesome <span className='text-theme-primary'>Services</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                {
                    serviceData.map((service, i) => (
                        <Service key={ i } service={ service } />
                    ))
                }
            </div>
            <div className='text-center'>
                <Link to='/services'>
                    <Button btnText={'Explore more'} classes={'py-3 px-8 font-medium leading-6  tracking-[0.15%]'} />
                </Link>
            </div>
        </section>
    );
};

export default Services