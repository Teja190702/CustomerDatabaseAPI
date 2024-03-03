import React from 'react'
import png from "../assets/png2.webp"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-[90vh] bg-[#41436a] p-20 relative w-full flex items-center justify-between'>
      

        <div className='w-1/2'>
          <h1 className='text-[#f64668] text-[72px] leading-[80px] font-bold'>Welcome To Customer Manager!</h1>
          <h3 className='text-[#ffe0c6] mt-4 text-[30px] leading-[38px] font-semibold'>Easily manage your customers with our services.</h3>
          <p className='text-[#ffe0c6] mt-4'>Search, Track, View your customer information quickly with our responsive application. Grow your Business <span className='text-[#f64668] text-lg font-bold'>10x</span> by just using our services. </p>

          <Link to='/customers'>
            <button className='mt-4 rounded-2xl bg-[#f64668] border-2 border-transparent hover:bg-transparent hover:border-[#f64668] px-6 py-2 text-[#ffe0c6]'>
              View Customers
            </button>
          </Link>
        </div>
      
        <div className='w-1/2 flex justify-end'>
          <img src={png} alt="" className='h-full'/>
        </div>
      
    
    </div>
  )
}

export default Home