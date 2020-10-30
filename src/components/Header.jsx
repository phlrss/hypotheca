import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NAME from '../images/brand_name.png';
import LOGO from '../images/brand_logo_white.png';

export const Header = ({ setFaqPosition }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [closeAnimation, setCloseAnimation] = useState(false)

  const collapseMenu = () => {
    setCloseAnimation(true)
    setTimeout(() => {
      setMobileMenuOpen(false)
      setCloseAnimation(false)
    }, 400)
  }

  return (
    <div className="w-screen h-16 bg-green-600 text-white flex items-center justify-between pl-2 pr-4 py-12 md:p-12 border-box shadow">
      <Link to="/hypotheca" className="flex items-center text-2xl font-bold">
        <div className="p-2">
          <img style={{ height: '35px' }} className="max-w-xs" src={LOGO} alt="logo" />
        </div>
        <img className="mt-1 relative w-32 max-w-xs" src={NAME} alt="lenderia" />
      </Link>
      <div className="hidden lg:block">
        <Link to="/results" className="mx-3">Calculate Mortgage</Link>
        <Link to="/blogs" className="mx-3">Blog</Link>
        <Link onClick={() => { setFaqPosition(0) }} to="/faq" className="mx-3">FAQ</Link>
        <Link to="/donate" className="mx-3">Donate</Link>
      </div>
      <button onClick={() => setMobileMenuOpen(true)} className="block lg:hidden">
        <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
      { mobileMenuOpen &&
        <div className={`${closeAnimation ? 'hide' : ''} mobile-menu flex flex-col lg:hidden absolute h-screen w-screen top-0 left-0 bg-white font-bold text-gray-700`}>
          <button onClick={() => collapseMenu()} className="lg:hidden p-5 absolute top-0 right-0">
            <svg fill="gray" height="15px" viewBox="0 0 365.696 365.696" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" /></svg>
          </button>
          <Link onClick={() => collapseMenu()} to="/results" className="mx-3 mt-8 p-5 border-b-2">Calculate Mortgage</Link>
          <Link onClick={() => collapseMenu()} to="/blogs" className="mx-3 p-5 border-b-2">Blog</Link>
          <Link onClick={() => collapseMenu()} to="/faq" className="mx-3 p-5 border-b-2">FAQ</Link>
          <Link onClick={() => collapseMenu()} to="/donate" className="mx-3 p-5 border-b-2">Donate</Link>
        </div>}
    </div>
  )
}
