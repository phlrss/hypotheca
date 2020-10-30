import React from 'react';
import { BlogTile } from './BlogTile';
import { blogs } from '../services/blogService'

export const BlogList = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row flex-wrap p-5">
      {blogs.map(e => (
        <BlogTile key={e.number} blog={e} />
      ))}
    </div>
  )
}