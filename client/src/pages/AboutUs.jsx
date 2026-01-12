import React from 'react'
import { motion } from 'motion/react'
import { assets } from '../assets/assets'

const AboutUs = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-10 min-h-[80vh]'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex flex-col gap-10'
            >
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-bold text-gray-800 mb-4'>About Zoom Ride</h1>
                        <p className='text-gray-600 leading-relaxed text-lg'>
                            Welcome to Zoom Ride, your premier destination for luxury and convenience in car rentals.
                            We are dedicated to providing an exceptional driving experience, whether you're planning a
                            weekend getaway, a business trip, or simply want to experience the thrill of a high-performance vehicle.
                        </p>
                        <p className='text-gray-600 leading-relaxed text-lg mt-4'>
                            Our mission is to make car rental seamless, transparent, and enjoyable. We believe that the journey
                            is just as important as the destination, and our carefully curated fleet of vehicles ensures that
                            you arrive in style and comfort.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={assets.banner_car_image} alt="About Zoom Ride" className='w-full rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300' />
                    </div>
                </div>

                <div className='grid md:grid-cols-3 gap-8 mt-10'>
                    <div className='p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Premium Fleet</h3>
                        <p className='text-gray-600'>From sleek sedans to powerful SUVs, our diverse collection features top-tier models from the world's most renowned manufacturers.</p>
                    </div>
                    <div className='p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Seamless Booking</h3>
                        <p className='text-gray-600'>Our user-friendly platform allows you to book your dream car in just a few clicks, with transparent pricing and no hidden fees.</p>
                    </div>
                    <div className='p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Exceptional Service</h3>
                        <p className='text-gray-600'>Our dedicated support team is available to assist you at every step, ensuring a hassle-free and memorable rental experience.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutUs
