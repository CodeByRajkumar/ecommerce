import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img src={assets.about_img} className='max-w-full h-auto md:max-w-[450px] mx-auto' alt="About Us" />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>Welcome to our store! We offer high-quality products with a seamless shopping experience. Customer satisfaction is our priority, ensuring fast delivery, secure payments, and top-notch service. Explore our collection and shop with confidence. Your happiness is our mission!</p>
          <p>We are dedicated to providing the best products at unbeatable prices. Our team ensures quality, innovation, and customer satisfaction. With easy returns, responsive support, and a user-friendly experience, we make shopping effortless. Thank you for choosing us!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to deliver high-quality products with exceptional customer service, ensuring a seamless shopping experience. We strive for innovation, affordability, and customer satisfaction while maintaining ethical business practices and fostering a strong, trustworthy relationship with our community.</p>
        </div>
        
      </div>
      <div className="py-4 text-xl">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At our store, quality assurance is our top priority. We carefully select and test each product to meet the highest standards of durability, functionality, and performance. Our dedicated team ensures that every item goes through rigorous quality checks before reaching you. We strive to maintain excellence by continuously improving our products and services based on customer feedback. Our commitment to quality guarantees a seamless shopping experience, ensuring that you receive only the best. Trust us for superior products and exceptional service!</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Convenience</b>
          <p className='text-gray-600'>We are committed to making your shopping experience as seamless and hassle-free as possible. Our user-friendly platform allows you to browse, select, and purchase products effortlessly from the comfort of your home. With secure payment options, fast delivery, and easy returns, we ensure a smooth and convenient process. Our responsive customer support is always available to assist you, making your experience stress-free and enjoyable. Shop with ease and confidence—your convenience is our priority!</p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our customers are at the heart of everything we do. We take pride in providing top-notch customer service, ensuring that your shopping experience is smooth, enjoyable, and hassle-free.Our dedicated support team is always ready to assist you with any inquiries, from product recommendations to order tracking and issue resolution. With prompt responses, personalized assistance, and a customer-first approach, we strive to exceed your expectations.Your satisfaction is our priority, and we are here to serve you with excellence at every step of your journey.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
