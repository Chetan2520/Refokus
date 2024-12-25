import React from 'react'

const Marque = ({imagesurl}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
    {imagesurl.map(url=><img src={url} className='w-[6vw] flex-shrink-0'/>)}
    {imagesurl.map(url=><img src={url} className='w-[6vw] flex-shrink-0'/>)}
    </div>
  )
}

export default Marque
