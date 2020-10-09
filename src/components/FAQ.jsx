import React from 'react'
import { faqs } from '../services/faqService'
import { useEffect } from 'react'

export const FAQ = ({ faqPosition }) => {
  useEffect(() => {
    const element = document.querySelector(`.faq-tile-${faqPosition}`)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [faqPosition])

  return (
    <div className="flex flex-col w-full max-w-xl p-2">
      <div className="p-5 mt-4 bg-white rounded flex flex-col shadow-md w-full">
        {Object.keys(faqs).map(key => (<div key={key} className={`${key !== faqs.length - 1 ? `faq-tile-${key} mb-8` : `faq-tile-${key}`}`}>
            <label className="block text-gray-600 text-sm font-bold mb-2">
              {`Q: ${faqs[key].question}`}
            </label>
            <label className="block text-gray-500 text-sm font-bold mb-2">
            {`A: ${faqs[key].answer}`}
            </label>
        </div>))}
      </div>
    </div>
)}
