import React from 'react'
import Layout from '../components/UI/Layout'
import ProductBox from '../components/ProductBox'
import { Label, Radio , TextInput } from 'flowbite-react';


function Products() {
    const data=[
        {
            id:1,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:2,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:3,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:4,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:5,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:6,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/3907595/pexels-photo-3907595.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:7,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:8,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id:9,
            title:"product name",
            salary:"222.00",
            rate:"4",
            image:"https://images.pexels.com/photos/2866119/pexels-photo-2866119.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]
  return (
    <Layout>
      <div className='grid grid-cols-12 gap-5'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-8 col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-9 order-2 sm:order-1'>
            {
                data.map(da=>{
                    return <ProductBox key={da.id}
                    salary={da.salary} title={da.title} image={da.image} rate={da.rate}
                    />
                })
            }
        </div>
        <div className='order-1 sm:order-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3'>
          <div className='bg-white shadow-sm p-8 rounded-md'>
            <TextInput
            placeholder="Search"
            required
            type="text"
            color={"gray"}
            />          
          </div>
          <div className='bg-white shadow-sm p-8 rounded-md mt-10'>
          <fieldset
      className="flex max-w-md flex-col gap-4"
      id="radio"
    >
      <legend className="mb-4">
          CATEGORIES
      </legend>
      <div className="flex items-center gap-2">
        <Radio
          defaultChecked
          id="united-state"
          name="countries"
          value="USA"
        />
        <Label htmlFor="united-state">
          Mens
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="germany"
          name="countries"
          value="Germany"
        />
        <Label htmlFor="germany">
          Women
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="spain"
          name="countries"
          value="Spain"
        />
        <Label htmlFor="spain">
          Baby & Kids
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio
          id="uk"
          name="countries"
          value="United Kingdom"
        />
        <Label htmlFor="uk">
          Electronics
        </Label>
      </div>
    </fieldset>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products