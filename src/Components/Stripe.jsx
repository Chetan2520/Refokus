import React from 'react'

const Stripe = ({val}) => {
   
  return (
    <div className='w-[16.767%] h-16 object-cover text-white  px-4 flex items-center justify-between  py-3 border-zinc-600 border-b-[1px] border-r-[1px]  border-t-[1px] '>
      <img className='w-[60%]' src={val.url}/>
      <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
