import React from 'react'
import Banner from '../Components/Navbar/Banner'
import BlogPage from '../Components/BlogPage/BlogPage'

const Home = () => {
  return (
   <>
    {/* <Banner/> */}
    <div className='max-w-7xl mx-auto'>
      <BlogPage/>
    </div>
   </>
  )
}

export default Home