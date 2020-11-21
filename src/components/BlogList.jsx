import React, { useState } from 'react';
import { BlogTile } from './BlogTile';
import { blogs } from '../services/blogService'

export const BlogList = ({ blogIds, showSearch }) => {
  const [searchText, setSearchText] = useState('')

  const filteredBlogs = blogIds ? blogs.filter(e => blogIds.includes(e.id)) : blogs

  const checkIfContentIncludesSearch = content => {
    return !!content.props.children.find(e => e.props.children.toString().toLowerCase().includes(searchText.toLowerCase()))
  }

  return (
    <div className="flex flex-col items-center">
      { showSearch && (
        <div className="px-5 w-full max-w-xl">
          <input onChange={e => setSearchText(e.target.value)} className="w-full mt-6 py-2 px-4 shadow rounded" placeholder="Search..." type="search" />
        </div>
      )}
      <div className="flex flex-col items-center md:items-stretch justify-center md:flex-row flex-wrap p-5">
        {filteredBlogs.map(e => {
          if (!showSearch) {
            return <BlogTile key={e.id} blog={e} />
          } else if (e.title.toLowerCase().includes(searchText.toLowerCase()) || checkIfContentIncludesSearch(e.content)) {
            return <BlogTile key={e.id} blog={e} />
          } else {
            return null
          }
        })}
      </div>
    </div>
  )
}
