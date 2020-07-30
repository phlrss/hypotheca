import React from 'react'
import LandingImage from '../images/landing_image.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing w-screen flex-auto flex flex-col items-center justify-center p-6">
      <div className="w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-10">
        <div className="flex flex-col mb-5">
          <span className="text-3xl md:text-5xl font-bold text-gray-600">Mortgages are complicated.</span>
          <span className="text-3xl md:text-5xl font-bold text-green-600">We can help</span>
          <span className="text-md md:text-lg font-bold text-gray-500 mt-8">Let us help you see the advantages and disadvantages of different mortgage payment types</span>
        </div>
        <img className="max-w-xs md:max-w-sm" src={LandingImage} alt="landing_pic" />
      </div>
      <Link
        to="/calculate"
        className="bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline">
          Calculate mortgage payments now!
      </Link>
    </div>
  )
}

export default LandingPage
