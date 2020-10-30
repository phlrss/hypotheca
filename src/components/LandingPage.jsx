import React from 'react'
import LandingImage from '../images/landing_image.svg'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="landing w-screen h-screen flex flex-col items-center justify-center p-6 pt-0">
      <div className="w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-4">
        <div className="flex flex-col mb-5">
          <div className="block md:flex">
            <span className="inline-flex text-3xl md:text-5xl font-bold text-gray-700 mr-3">Mortgages made</span>
            <span className="text-3xl md:text-5xl font-bold text-green-600">easy</span>
          </div>
          <span className="text-md md:text-lg font-bold text-gray-600 mt-8">Intelligent mortgage calculator that recommends the optimal payment strategy</span>
        </div>
        <img className="max-w-xs md:max-w-sm" src={LandingImage} alt="landing_pic" />
      </div>
      <Link
        to="/question"
        className="bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline">
          Calculate your mortgage now
      </Link>
    </div>
  )
}
