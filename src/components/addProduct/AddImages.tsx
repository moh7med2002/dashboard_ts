import React from 'react'
import {BiImageAdd} from 'react-icons/bi'

// const IconWrapper = styled('div')({
//     borderRadius:"50%",
//     backgroundColor:"#45bd62",
//     display:"flex",
//     justifyContent:"center",
//     alignItems:'center',
//     width:"40px",
//     height:"40px"
// })

// const Label = styled('label')({
//     display:"block",
//     width:"100%",
//     cursor:"pointer",
//     padding:"6px"
// })

type props = {
    onChange:(file:any)=>void
}

function AddImages({onChange}:props) {
    return (
        <>
        <div className="my-[10px]">
            <button className='w-full'>
                <label htmlFor='images'>
                    <div className='flex items-center w-full gap-x-2 justify-center h-[200px] border-[1px] border-gray-500 border-dashed'>
                        <div><BiImageAdd /></div>
                        <h5 className='text-[15px] font-[600]'>Add Image</h5>
                    </div>
                </label>
            </button>
            <hr/>
        </div>
        <input onChange={(e)=>onChange(e.target.files ? e.target.files[0] : null)} hidden type='file' id="images"/>
        </>
    )
}

export default React.memo(AddImages)