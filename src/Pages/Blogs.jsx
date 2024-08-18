import React from 'react'
import BlogPage from '../Components/BlogPage/BlogPage'

const Blogs = () => {
  return (
    <>
    <div className='bg-black px-4 py-28 '>
        <div className='mx-auto text-white text-center'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Blog's Page</h2> 
        </div>
    </div>
    <div className='max-w-7xl mx-auto'><BlogPage/></div>
    </>
  )
}

export default Blogs