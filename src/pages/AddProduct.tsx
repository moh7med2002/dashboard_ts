import React, { useCallback, useState } from 'react'
import Layout from '../components/UI/Layout'
import TextEditor from '../components/UI/TextEditor'
import Images from '../components/addProduct/Images'
import AddImages from '../components/addProduct/AddImages'

function AddProduct() {
    const [images,setImages] = useState<any[]>([])

const handleAddImage = useCallback((file:any)=>
{
    if(file)
    {
        setImages((back=>[...back ,file]))
    }
},[images])

const handleDeleteImage = useCallback((index:number)=>
{
    setImages((prev) => {
        const updatedFiles = [...prev];
        updatedFiles.splice(index, 1);
        return updatedFiles;
        });
},[images])

  return (
    <Layout>
        <div className='bg-white shadow-lg rounded-xl p-4'>
            <>
                <div className='mb-5'>
                    <label htmlFor="name" className=' block text-gray-500 font-bold mb-2'>Product Name</label>
                    <input type="text" placeholder='Name' id='name' autoComplete='off' 
                    className='w-full rounded-md focus:border-gray-500 focus:ring-0 border-[1px] border-gray-500'/>
                </div>
                <div className='mb-5'>
                    <label htmlFor="Category" className=' block text-gray-500 font-bold mb-2'>Category</label>
                    <select name="" id="Category"
                    className='w-full rounded-md focus:border-gray-500 focus:ring-0 border-[1px] border-gray-500'
                    >
                        <option value="1" className='bg-gray-500 text-white'>Man</option>
                        <option value="2" className='bg-gray-500 text-white'>Woman</option>
                        <option value="3" className='bg-gray-500 text-white'>Kids</option>
                    </select>
                </div>
                <div className='mb-5'>
                    <label htmlFor="Price" className=' block text-gray-500 font-bold mb-2'>Price</label>
                    <input type="text" placeholder='Price' id='Price' autoComplete='off' 
                    className='w-full rounded-md focus:border-gray-500 focus:ring-0 border-[1px] border-gray-500'/>
                </div>
                <TextEditor/>
                <AddImages onChange={handleAddImage}/>
                <Images images={images} handleDeleteImage={handleDeleteImage}/>
                <button className='bg-Primary text-white px-6 py-3 rounded-lg duration-300 hover:shadow-2xl'>Add Product</button>
            </>
        </div>
    </Layout>
  )
}

export default AddProduct