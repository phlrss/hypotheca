import React from 'react'
import { faqs } from '../services/faqService'
import { Link } from 'react-router-dom'

export const FAQTiles = ({ setFaqPosition }) => {
  return (
    <div className="w-full flex flex-col justify-center p-8 lg:p-12 xl:p-24 bg-gray-500 bg-opacity-25">
      <div className="flex flex-col lg:flex-row justify-center">
        { Object.keys(faqs).filter((e, index) => index < 3).map(key => (
          <Link onClick={() => {setFaqPosition(key)}} to="/faq" key={key} className="text-left transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer p-5 mb-5 mr-4 bg-white rounded flex items-center shadow-md w-full lg:max-w-sm">
            <span className="block text-gray-700 font-bold mb-2 flex-grow">
              {faqs[key].question}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        { Object.keys(faqs).filter((e, index) => index > 2 && index < 6).map(key => (
          <Link onClick={() => {setFaqPosition(key)}} to="/faq" key={key} className="text-left transition-all duration-300 hover:bg-gray-200 hover:cursor-pointer p-5 mb-5 mr-4 bg-white rounded flex items-center shadow-md w-full lg:max-w-sm">
            <span className="block text-gray-700 font-bold mb-2">
              {faqs[key].question}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
