import React from 'react'
import Layout from '../components/UI/Layout'
import TopBoxes from '../components/home/TopBoxes'
import CalenderBox from '../components/home/Calender/CalenderHome'
import Chart from '../components/home/ChartHome'
import LatestProducts from '../components/home/LastProducts'

export default function Home() {
  return (
    <Layout>
        <TopBoxes/>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-x-10 gap-y-4'>
            <CalenderBox/>
            <Chart/>
        </div>
        <LatestProducts/>
    </Layout>
  )
}
