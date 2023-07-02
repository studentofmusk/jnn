"use client"
import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from './icons'
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <div className='w-full md:mt-10'>
        <div className='w-full flex justify-center items-center'>
            <div className='flex justify-between w-10/12 md:w-4/12 '>
                <motion.a href='https://twitter.com/jnninstitute' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-[#001c30]'><Twitter className="md:w-6 md:h-6 w-4 h-4 fill-white" /></motion.a>
                <motion.a href='https://www.facebook.com/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-[#001c30]'><Facebook className="md:w-6 md:h-6 w-4 h-4 fill-white" /></motion.a>
                <motion.a href='https://www.youtube.com/channel/UCbzxebRE40qBNxoy9Z7e97Q' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-[#001c30]'><Youtube className="md:w-6 md:h-6 w-4 h-4 fill-white" /></motion.a>
                <motion.a href='https://www.linkedin.com/school/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-[#001c30]'><Linkedin className="md:w-6 md:h-6 w-4 h-4 fill-white" /></motion.a>
                <motion.a href='https://www.instagram.com/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-[#001c30]'><Instagram className="md:w-6 md:h-6 w-4 h-4 fill-white" /></motion.a>
            </div>
        </div>
        <div className="bg-[#165e5f] h-20 mt-5 flex justify-center items-center">
            <p className='text-white '>&copy;2022 JNN INSTITUTE</p>
        </div>
    </div>
  )
}

export default Footer