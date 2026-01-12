import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Footer = ({ openCookieSettings }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

            className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}

                className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div>
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}

                        src={assets.logo} alt="logo" className='h-8 md:h-9' />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}

                        className='max-w-80 mt-3'>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}

                        className='flex items-center gap-3 mt-6'>
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.twitter_logo} className='w-5 h-5' alt="" /> </a>
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="" /> </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}

                    className='flex flex-wrap justify-between w-1/2 gap-8'>

                    <div>
                        <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                        <ul className='mt-3 flex flex-col gap-1.5'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cars">Browse Cars</Link></li>
                            <li><Link to="/owner">List Your Car</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                        <ul className='mt-3 flex flex-col gap-1.5'>
                            <li><Link to="/help-center">Help Center</Link></li>
                            <li><Link to="/tos">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/insurance">Insurance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                        <ul className='mt-3 flex flex-col gap-1.5'>
                            <li>101 Alpha Blocks</li>
                            <li>Marathalli, Bengaluru, India-560103</li>
                            <li>+91 8708313673</li>
                            <li>zoomriders@gmail.com</li>
                        </ul>
                    </div>

                </motion.div>





            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}

                className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Zoom Ride. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li>|</li>
                    <li><Link to="/tos">Terms</Link></li>
                    <li>|</li>
                    <li><button onClick={openCookieSettings} className="hover:underline">Cookies</button></li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Footer
