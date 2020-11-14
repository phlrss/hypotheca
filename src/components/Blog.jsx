import React, { useEffect } from 'react'
import { blogs } from '../services/blogService'
import moment from 'moment';
import { Link } from 'react-router-dom';

export const Blog = ({ match }) => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  const blogId = match?.params?.id || undefined
  const blog = blogs.find(e => e.id === blogId)

  return (
    <div className="flex p-1 md:p-12">
      {blog ? <div className="landing flex-1 flex flex-col text-gray-700 font-bold text-sm box-border bg-white">
        <div className="mb-5 p-5 md:p-32 md:pt-8 md:pb-3 blog-header bg-opacity-75">
          <Link to="/blogs"><span className="text-blue-600">&lt; View all blogs</span></Link>
          <h1 className="text-3xl text-gray-800 mb-1 mt-5">{blog.title}</h1>
          <span className="font-bold font-normal italic">{moment(blog.date).format('MMM D, YYYY')}</span>
        </div>
        <div className="text-md p-5 md:p-32 md:pt-1 pt-0 font-normal text-gray-800">
          {blog.content}
          <p className="font-bold text-gray-800 text-lg mt-4">{`${blog.author}, Lenderia`}</p>
          <p className="font-bold text-blue-500 underline">{blog.email}</p>
        </div>
      </div> :
        <div className="flex-1 flex flex-col p-5 md:p-32 text-gray-700 font-bold text-sm box-border bg-white shadow">
          <Link to="/blogs"><span className="text-blue-600">&lt; Back to blogs</span></Link>
          <h1 className="text-3xl text-gray-800 mt-5">Woops! This blog doesn't exist</h1>
        </div>
      }
    </div>
  )
}