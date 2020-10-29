import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '../images/search_icon.svg'
import CalculateIcon from '../images/calculate_icon.svg'

export const Question = () => {
  return (
    <div className="landing p-5">
      <div className="p-5 bg-white rounded flex flex-col mt-5 shadow-md w-full">
        <label className="block text-gray-700 text-lg text-center font-bold mb-8">
          When it comes to mortgages, you are
        </label>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <Link
            to="/calculate"
            className="transition-all duration-200 h-full w-full flex flex-row md:flex-col items-center rounded font-bold p-4 text-gray-700 hover:bg-gray-300 hover:shadow-md focus:outline-none focus:shadow-outline mb-2 md:mb-0 mr-0 md:mr-4">
              <img className="flex-grow-0 w-24 mb-2" src={SearchIcon} alt="search-icon" />
              <span className="flex-grow text-center">Searching for the optimal payment strategy</span>
          </Link>
          <Link
            to="/results"
            className="transition-all duration-200 h-full w-full flex flex-row md:flex-col items-center rounded font-bold p-4 text-gray-700 hover:bg-gray-300 hover:shadow-md focus:outline-none focus:shadow-outline">
              <img className="flex-grow-0 w-24 mb-2" src={CalculateIcon} alt="calculate-icon" />
              <span className="flex-grow text-center">Ready to calculate your mortgage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Question
