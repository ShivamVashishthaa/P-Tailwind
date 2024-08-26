import React from 'react'
import { FaBars } from "react-icons/fa6";

function Header() {
    return (
        <nav className='flex flex-row justify-between px-2'>
            <div className='flex justify-center items-center gap-2'>
                <img src="./assets/Logo.svg" alt="Logo" />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>hoster is hiering</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
                <li>
                    <a href='#' className='text-gray-400 hover:text-gray-800 font-bold'>Home</a>
                </li>
                <li>
                    <a href='#' className='text-gray-400 hover:text-gray-800 font-bold'>About</a>
                </li>
                <li>
                    <a href='#' className='text-gray-400 hover:text-gray-800 font-bold'>Services</a>
                </li>
                <li>
                    <a href='#' className='text-gray-400 hover:text-gray-800 font-bold'>Contact</a>
                </li> 
            </ul>
            <div className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6 '>
                <a  className=' text-gray-400' href="#">sign in</a>
                <button className='rounded-md px-2 py-1 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
            </div>
            <div className='lg:hidden flex justify-center items-center'>
                <FaBars />
            </div>
        </nav>
    )
}

export default Header
