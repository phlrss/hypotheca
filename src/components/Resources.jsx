import React, { useEffect } from 'react'

export const Resources = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  const resources = [
    {
      text: '#1 Mortgage information from the Government of Canada',
      href: 'https://www.canada.ca/en/financial-consumer-agency/services/mortgages.html'
    },
    {
      text: '#2 Homebuyer information from the Canada Mortgage and Housing Corporation (CMHC)',
      href: 'https://www.cmhc-schl.gc.ca/'
    },
    {
      text: '#3 Compare mortgage rates across Canadian lenders and mortgage brokers',
      href: 'https://www.ratespy.com/'
    },
    {
      text: '#4 Reddit PersonalFinanceCanada forum on mortgages',
      href: 'https://www.reddit.com/r/PersonalFinanceCanada/search?q=mortgage&restrict_sr=1'
    }
  ]
  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border">
      <h1 className="text-3xl text-gray-800 mb-1">Mortgage Resources</h1>
      {resources.map((e, index) => (
        <p key={index} className="mt-4">
          {e.text}
          <br />
          <a
            className="text-blue-500 underline"
            href={e.href}
            target="_blank"
            rel="noopener noreferrer">
            {e.href}
          </a>
        </p>
      ))}
    </div>
  )
}