import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'> 751030 Raj Kumar <br /> BBSR, ODISHA</p>
          <p className='text-gray-500'>Tel: (+91)987654321 <br />Email: admin@fm.com</p>
          <p className='font-semibold text-gray-500'>Career at FashionMart</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
