import React from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../services/faqService'

export const FrequencyResults = ({ results }) => {
  const { frequency } = results || { frequency: 'monthly' }

  const getFrequency = freq => {
    switch (freq) {
      case 'monthly':
        return 'Monthly'
      case 'semimonthly':
        return 'Semi-Monthly'
      case 'biweekly':
        return 'Bi-Weekly'
      case 'accbiweekly':
        return 'Acc. Bi-Weekly'
      case 'weekly':
        return 'Weekly'
      case 'accweekly':
        return 'Acc. Weekly'
      default:
        return 'Monthly'
    }
  }

  return (
    <div className="landing w-screen h-screen flex flex-col items-center justify-center p-6">
      <div className="w-screen max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between px-12 md:p-12 mb-3">
        <div className="flex flex-col mb-5">
          <div className="text-3xl md:text-5xl font-bold text-gray-700">
            Based on your results, we suggest the
            <span className="ml-3 mr-3 text-3xl md:text-5xl font-bold text-green-600">{getFrequency(frequency)}</span>
            payment schedule
          </div>
          <span className="text-md md:text-lg font-bold text-green-600 mt-8 mr-3">{faqs[frequency].question}</span>
          <span className="text-md md:text-lg font-bold text-gray-600 mt-3">{faqs[frequency].answer}</span>
          <span className="text-md md:text-lg text-gray-600 mt-5">Feel free to view how different payment schedules affect your mortgage using the <strong>Payment Frequency</strong> dropdown on the next page</span>
        </div>
      </div>
      <Link
        to="/results"
        className="bg-green-600 text-white font-bold p-4 rounded-full shadow-md focus:outline-none focus:shadow-outline">
          View amortization schedule
      </Link>
    </div>
  )
}

export default FrequencyResults
