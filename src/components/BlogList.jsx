import React from 'react';
import { BlogTile } from './BlogTile';
import { blogs } from '../services/blogService'

export const BlogList = ({ blogIds }) => {
  const filteredBlogs = blogIds ? blogs.filter(e => blogIds.includes(e.id)) : blogs

  return (
    <div className="flex flex-col items-center md:items-stretch justify-center md:flex-row flex-wrap p-5">
      {filteredBlogs.map(e => (
        <BlogTile key={e.id} blog={e} />
      ))}
    </div>
  )
}