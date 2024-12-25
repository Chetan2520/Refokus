import React from 'react'
import Button from './Button'
const Footer = () => {
  return (
    <div className='w-full text-white'>
      <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
      <div className='basis-1/2'>
        <h1 className='text-[11rem] font-semibold leading-none tracking-tighter'>refokus.</h1>
      </div>
      <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3'>
            <h4 className='text-zinc-500 mb-10'>Socials</h4>
            {["Instagram", "Twitter", "LinkedIn", "Facebook"].map((item,index)=><a href="#" className='block mt-3 capitalize text-zinc-600'>{item}</a>)}

        </div>

        <div className='basis-1/3'>
            <h4 className='text-zinc-500 mb-10'>Sitemap</h4>
            {["Home", "Work", "Career", "Contact"].map((item,index)=><a href="#" className='block mt-3 capitalize text-zinc-400'>{item}</a>)}

        </div>
        <div className='basis-1/2 flex flex-col gap-5'>
        <p>Refokus is a pioneering digital agency driven by design and empowered by technology. </p>
       <div className="w-1/2">
       <Button  title={'Join Us'}/>
       </div>
        </div>
      </div>
      </div>
      <div>
        <p className='text-center text-sm my-10 text-zinc-600'>
        "© 2024 Refokus. All rights reserved."</p>
      </div>
    </div>
  )
}

export default Footer
