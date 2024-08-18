import React from 'react'
import useNavitem from '../../Context/NavItemContext'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Banner = () => {

    const NavItemContext=useNavitem()
    

  return (
    <>
    <div className='bg-black px-4 py-28  '>
        <div className='mx-auto text-white text-center'>
            <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcom to Our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your bolg and join our community of writers and readers who are passionate sharing about their stories ideas. we offer everything you need to get to started, from helpful tips and tutorials.</p> 
            <div ><Link className=' font-medium inline-flex justify-center items-center hover:text-orange-500' to='/'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link></div>
        </div>
    </div>
    </>
  )
}

export default Banner