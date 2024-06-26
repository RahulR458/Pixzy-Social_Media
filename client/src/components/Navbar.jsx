import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { CiSaveDown2, CiSquarePlus } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { IoMenuOutline, IoSearchSharp, IoSettingsOutline, IoSunnyOutline } from 'react-icons/io5'
import { MdLogout, MdOutlineExplore } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'

export const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto h-screen overflow-hidden'>

        {/* Desktop Navbar */}
        <div className='flex'>
        <div className='w-[228px] h-full  sm:block flex'>
            <div className='px-[28px] pt-[42px]'>
                <h1 className='font-semibold font-serif text-xl pb-8'>Instagram</h1>
                <div>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><IoMdHome /></span>Home</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><IoSearchSharp /></span>Search</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><MdOutlineExplore /></span>Explore</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><BiMoviePlay /></span>Reels</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><RiMessengerLine /></span>Messeges</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><FaRegHeart /></span>Notifications</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer'><span className='pt-1'><CiSquarePlus /></span>Create</h1>
                    <h1 className='p-3 font-sans text-[18px] gap-2 flex cursor-pointer pb-18'><span className='pt-1'><IoMdHome /></span>Profile</h1>
                    <div className=' w-[240px] h-full bg-slate-400 rounded-md shadow-md shadow-gray-200 '>
                        <h1 className='px-12 pb-2 p-3 text-[18px] cursor-pointer flex gap-2'><span className='pt-1'><IoSettingsOutline /></span>Settings</h1>
                        <h1 className='px-12 pb-2 p-3 text-[18px] cursor-pointer flex gap-2'><span className='pt-1'><CiSaveDown2 /></span>Saved</h1>
                        <h1 className='px-12 pb-2 p-3 text-[18px] cursor-pointer flex gap-2'><span className='pt-1'><IoSunnyOutline /></span>Dark Mode</h1>
                        <h1 className='px-12 pb-2 p-3 text-[18px] cursor-pointer flex gap-2'><span className='pt-1'><MdLogout /></span>Log out</h1>
                    </div>
                    <h1 className='p-3 pt-4 pb-8 font-sans text-[18px] gap-2  flex cursor-pointer'><span className='pt-1'><IoMenuOutline /></span>More</h1>
                </div>
            </div>
            
        </div>
        <div className='w-[1px] bg-slate-300 my-6'></div>
        </div>


    </div>
  )
}
