import React from 'react'
import Layout from '../components/UI/Layout'
import {MdEmail , MdLocationPin} from 'react-icons/md'
import {FaPhone } from 'react-icons/fa'


function Profile() {
  return (
    <Layout>
        <div className='grid grid-cols-12 gap-6 max-w-[1200px] mx-auto items-start'>
            <div className='bg-white p-4 shadow-xl rounded-lg col-span-12 md:col-span-4 lg:col-span-3'>
                <h2 className='text-[22px] font-[600]'>My Profile</h2>
                <hr className='my-3'/>
                <img 
                className='w-[120px] h-[120px] rounded-full object-cover mx-auto my-5'
                src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <hr className='mt-3'/>
                <ul className=''>
                    <li className='flex py-3 px-2 items-center gap-4 cursor-pointer duration-300 hover:bg-Primary-100 hover:text-Primary'>
                        <MdEmail className='text-[18px]'/>
                        <span>email@gmail.com</span>
                    </li>
                    <hr/>
                    <li className='flex py-3 px-2 items-center gap-4 cursor-pointer duration-300 hover:bg-Primary-100 hover:text-Primary'>
                        <FaPhone className='text-[16px]'/>
                        <span>+123456789</span>
                    </li>
                    <hr/>
                    <li className='flex py-3 px-2 items-center gap-4 cursor-pointer duration-300 hover:bg-Primary-100 hover:text-Primary'>
                        <MdLocationPin className='text-[18px]'/>
                        <span>gaza,palestine </span>
                    </li>
                    <hr/>
                </ul>
            </div>
            <div className='bg-white p-4 shadow-xl rounded-lg col-span-12 md:col-span-8 lg:col-span-9'>
                <h2 className='text-[22px] font-[600]'>About Me</h2>
                <p className='text-[14px] text-gray-500 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas ad eos doloribus libero atque! Numquam,
                    reprehenderit! Quas amet velit officia iure? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium officiis tempore corporis asperiores, excepturi iste commodi nam ad, aliquid libero, nesciunt impedit?
                </p>
                <div className='mt-6'>
                    <h2 className='text-[20px] font-[600]'>Details</h2>
                    <hr className='my-2'/>
                    <div className='flex items-center gap-8 py-2 px-4'>
                        <h4 className='font-bold'>First Name:</h4>
                        <h4>John</h4>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex items-center gap-8 py-2 px-4'>
                        <h4 className='font-bold'>Last Name:</h4>
                        <h4>Doe</h4>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex items-center gap-8 py-2 px-4'>
                        <h4 className='font-bold'>Gender:</h4>
                        <h4>Male</h4>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex items-center gap-8 py-2 px-4'>
                        <h4 className='font-bold'>Age:</h4>
                        <h4>21</h4>
                    </div>
                    <hr className='my-2'/>
                    <div className='flex items-center gap-8 py-2 px-4'>
                        <h4 className='font-bold'>Zip Code:</h4>
                        <h4>80990</h4>
                    </div>
                    <hr className='my-2'/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile