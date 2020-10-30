import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const BlogTile = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`} className="flex flex-col bg-white p-3 my-3 md:m-3 shadow w-full max-w-sm">
      <span className="font-bold text-green-600 text-sm">{blog.section}</span>
      <span className="mt-1 text-xl font-bold">{blog.title}</span>
      <span className="mt-5 text-gray-600 text-sm flex-1">{blog?.snippet}</span>
      <div className="mt-2 flex flex-col items-end text-sm text-gray-800">
        <span>{`${blog.author}, Lenderia`}</span>
        <span>{moment(blog.date).format('MMM D, YYYY')}</span>
      </div>
    </Link>
  )
}