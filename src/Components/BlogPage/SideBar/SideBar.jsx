import React from 'react'
import { CardData } from '../../../API/Api'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const SideBar = () => {
  return (
    <>
    <div>
      <div>
        <h3 className='text-2xl font-bold px-4'>Latest Blogs</h3>
        <div>
          {
            CardData.slice(0,5).map((val,idx)=> <div key={idx}  className='my-5 border-b-2 border-spacing-2 px-4 '>
              <h4 className='font-medium mb-2'>{val.title}</h4>
              <Link className=' font-medium inline-flex text-gray-500 justify-center items-center hover:text-orange-500 mb-4' to='/'>Read more <FaArrowRight className='mt-1 ml-2 '/></Link>
            </div>)
          }
        </div>
      </div>
    </div>
    <div>
        <h3 className='text-2xl font-bold px-4 mt-20'>Popular Blogs</h3>
        <div>
          {
            CardData.slice(6,10).map((val,idx)=> <div key={idx}  className='my-5 border-b-2 border-spacing-2 px-4 '>
              <h4 className='font-medium mb-2'>{val.title}</h4>
              <Link className=' font-medium inline-flex text-gray-500 justify-center items-center hover:text-orange-500 mb-4' to='/'>Read more <FaArrowRight className='mt-1 ml-2 '/></Link>
            </div>)
          }
        </div>
      </div>
    </>
  )
}

export default SideBar