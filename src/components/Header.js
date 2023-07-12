
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from './icons';
import { motion } from "framer-motion";


export default function Header(){
    return (
        <div className="w-full h-28  bg-[#2b8384]">
      <div className="w-[70%] mx-auto h-full flex items-center justify-between">
            <img src="jnn name.png" className="h-full" />

            <div className='hidden md:flex justify-between space-x-2'>
                <motion.a href='https://twitter.com/jnninstitute' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-white'><Twitter className="  w-4 h-4 fill-[#001c30]" /></motion.a>
                <motion.a href='https://www.facebook.com/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-white'><Facebook className="  w-4 h-4 fill-[#001c30]" /></motion.a>
                <motion.a href='https://www.youtube.com/channel/UCbzxebRE40qBNxoy9Z7e97Q' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-white'><Youtube className="  w-4 h-4 fill-[#001c30]" /></motion.a>
                <motion.a href='https://www.linkedin.com/school/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-white'><Linkedin className="  w-4 h-4 fill-[#001c30]" /></motion.a>
                <motion.a href='https://www.instagram.com/jnninstitute/' whileHover={{y:-2}} whileTap={{scale:.9}} target='_blank' className='p-3 rounded-full  shadow-lg shadow-gray-700 bg-white'><Instagram className="  w-4 h-4 fill-[#001c30]" /></motion.a>
            </div>
      </div>
    </div>

    )
}