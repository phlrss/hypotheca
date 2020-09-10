import React from 'react'
import { faqs } from '../services/faqService'

export const FAQTiles = () => {
  return (
    <div className="w-full p-12 bg-gray-500 bg-opacity-25">
      <div className="flex justify-center">
        { faqs.filter((e, index) => index < 3).map((faq, index) => (
          <div key={index} className="p-5 mb-5 mr-4 bg-white rounded flex flex-col shadow-md w-full max-w-sm">
            <label className="block text-gray-700 font-bold mb-2">
              {faq.question}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        { faqs.filter((e, index) => index > 2 && index < 6).map((faq, index) => (
          <div key={index} className="p-5 mr-4 bg-white rounded flex flex-col shadow-md w-full max-w-sm">
            <label className="block text-gray-700 font-bold mb-2">
              {faq.question}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
