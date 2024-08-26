import React from 'react'

function Body() {
  return (
    <div className='space-y-4 lg:flex lg:gap-4 '>
      <div className='flex justify-center relative lg:flex-1 lg:h-[400px] lg:order-2 lg:justify-end'>
        <img src="./assets/Blue-Shape.svg" alt="1" className='-rotate-45 h-64 md:h-72 lg:h-[400px]' />
        <img src="./assets/Pink-Shape.svg" alt="2" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./assets/Purple-Shape.svg" alt="3" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./assets/Hero-Model.png" alt="4" className='absolute h-64 md:h-72 lg:h-[400px]' />
      </div>
      <div className='lg:flex-1 lg:order-1 '>
        <h1 className='text-5xl font-bold font-playfair leading-tight '>Host your website in less than 5 mins</h1>
        <p className='font-lato text-gray-400'>with hoster, get your website up and running in no less than 5 minutes with the most competitive pricing package</p>
        <form action="" className='flex flex-col gap-4 md:flex-row mt-4'>
          <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" name="" id="" placeholder='Enter email address' />
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Withlist</button>
        </form>
        <div className='flex gap-2 mt-4'>
          <img src="./assets/Checkmark.svg" alt="" />
          <p className='font-lato text-gray-400 :'>Unsubscribe Anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body
