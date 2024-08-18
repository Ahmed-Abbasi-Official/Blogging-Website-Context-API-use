import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../BlogPage/Pagination'
import usePagination from '../../Context/Pagination'

const Card = ({CardData}) => {  
  const {page,setPage}=usePagination()

  

  return (
    <>
    <div className='grid md:grid-cols-3   sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            CardData.slice(page.start,page.end).map((blog,idx)=><Link key={idx} className='p-5 shadow-lg rounded'>
                <div>
                    <img src={blog.image} alt="" className='w-full' />
                </div>
                <h3 className='mt-4 mb-2 font-bold text-sm text-gray-600 hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                <p className='mb-2'>{blog.author}</p>
                <p className='text-sm text-gray-600 mb-2'>Published : {blog.published_date}</p>
            </Link> )
        }
    </div>
    </>
  )
}

export default Card