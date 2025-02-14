import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io"
const Card = ({width,start,para,hover="none"}) => {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl text-white ${width} min-h-[30rem] hover:${hover} flex flex-col justify-between`}>
    <div className='w-full'>
    <div className='w-full flex justify-between items-center'>
        <h3>heading</h3>
        <IoIosArrowRoundForward/>
     </div>
     <h1 className='text-3xl font-medium mt-5'>Any heading</h1>
    </div>
<div className='down w-full '>
{
    start && (
        <>
        <h1 className='text-6xl font-semibold tracking-tight leading-none'>Start a Project</h1>
        <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact Us</button>
        </>
    )
}
{
    para && (
<p className='text-sm text-zinc-500 font-medium'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
    ) 
}   
</div>

    </div>
  )
}

export default Card
