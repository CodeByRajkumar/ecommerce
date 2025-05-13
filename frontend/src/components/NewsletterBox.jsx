import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 35% off</p>
      <p className='mt-3 text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab consequatur aliquam atque quo dicta molestiae.</p>
      <form className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2' onSubmit={onSubmitHandler}>
        <input className='w-full p-3 outline-none sm:flex-1' type="email" placeholder='Enter Your Email' aria-label='Email Address' required />
        <button className='px-10 py-4 text-xs text-white bg-black' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
