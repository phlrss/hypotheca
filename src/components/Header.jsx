import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-screen h-16 bg-green-600 text-white flex items-center justify-between p-12 border-box shadow">
      <Link to="/hypotheca" className="text-2xl font-bold">Hypotheca.io</Link>
      <div className="hidden lg:block">
        <span className="mx-3">Calculate Mortgage</span>
        <span className="mx-3">About Us</span>
      </div>
      <button className="block lg:hidden">
        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
  )
}

export default Header
