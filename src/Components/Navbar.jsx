import React from 'react'
import Button from './Button'
import { MdDoubleArrow } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='max-w-screen-xl flex justify-between border-b-2 border-zinc-700 gap-28 mx-auto px-20 py-5 '>
      <div className='logo-links flex gap-28'>
      <h1 className='text-2xl font-bold text-white flex items-end '> Refocus <MdDoubleArrow/></h1>
      <div className='link flex items-center gap-16 font-semibold text-white '>
        <a href='#' >Home</a>
        <a href='#' >Work</a>
        <a href='#' >Culture</a>
        <span className='bg-zinc-600 h-7 w-[2px]'></span>
        <a href='#' >News</a>
        
      </div>
      </div>
      <div className='Button'>
      <Button/>
      </div>
    </div>
  )
}

export default Navbar
