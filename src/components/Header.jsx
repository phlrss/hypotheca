import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-screen h-16 bg-green-600 text-white flex items-center justify-between p-12 border-box shadow">
      <Link to="/hypotheca" className="text-2xl font-bold">Hypotheca.io</Link>
      <div>
        <span className="mx-3">Calculate Mortgage</span>
        <span className="mx-3">About Us</span>
      </div>
    </div>
  )
}

export default Header
