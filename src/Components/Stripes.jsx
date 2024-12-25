import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
    var data=[
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/01/puma.svg",number:48},
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/02/Dognomics-Logo.png.webp",number:40},
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/01/enchant.svg",number:6},
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/01/EV.svg",number:2},
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/01/buddha.svg",number:74},
        {url:"https://www.digitalsilk.com/wp-content/uploads/2024/01/rollink.svg",number:28}
    ]
  return (
    <div className='flex items-center mt-24 '>
    {data.map((elem,index)=>(
      <Stripe val={elem}/>
    ))}
    </div>
  )
}

export default Stripes
