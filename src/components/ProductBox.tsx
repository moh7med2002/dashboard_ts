import { Rating } from 'flowbite-react'
import React from 'react'

type Props ={
    image:string,
    rate:string,
    salary:string,
    title:string
}

function ProductBox({title,image,rate,salary}:Props) {
  return (
    <div className='bg-white shadow rounded-md'>
        <img src={image} alt="" 
        className='w-full h-[280px] object-cover rounded-t-md'
        />
        <div className=' my-6 text-center'>
            <h4 className='font-[500] text-[18px] capitalize'>{title}</h4>
            <h5 className='font-[700] text-Primary my-2'>${salary}</h5>
            <Rating className=' justify-center'>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star className="text-gray-300 dark:text-gray-500"/>
            </Rating>
        </div>
    </div>
  )
}

export default ProductBox