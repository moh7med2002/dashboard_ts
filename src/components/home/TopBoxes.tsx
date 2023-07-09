import React from 'react'
import {LuBedDouble} from 'react-icons/lu'

function TopBoxes() {
    const data=[
        {
            id:1,
            title:"new booking",
            amount:"8,461",
            icon:LuBedDouble
        },
        {
            id:2,
            title:"new booking",
            amount:"8,461",
            icon:LuBedDouble
        },
        {
            id:3,
            title:"new booking",
            amount:"8,461",
            icon:LuBedDouble
        },
        {
            id:4,
            title:"new booking",
            amount:"8,461",
            icon:LuBedDouble
        }
    ]
  return (
    <div className=' grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4'>
        {
            data.map(da=>{
                return <div key={da.id} 
                className=' bg-white px-5 py-6 flex items-center gap-5 duration-300 hover:shadow-md cursor-pointer rounded-xl group'>
                    <div className='w-[60px] h-[60px] rounded bg-Primary-100 flex items-center justify-center text-[30px] text-Primary
                     group-hover:bg-Primary group-hover:text-white duration-300'>
                        <da.icon/>
                    </div>
                    <div>
                        <h4>{da.title}</h4>
                        <span>{da.amount}</span>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default TopBoxes