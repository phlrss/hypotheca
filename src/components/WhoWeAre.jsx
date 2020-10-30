import React, { useEffect } from 'react'

export const WhoWeAre = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border">
      <h1 className="text-3xl text-gray-800 mb-5">Who we are</h1>
      <p>
        Our mission is to make an easy-to use mortgage calculator and to make mortgage options easier
        to understand so that Canadians can make smarter financial decisions when it comes to their money.
      </p>
      <p className="mt-4">
        Based in Montreal, Lenderia was founded in 2020 by two homeowners committed to making mortgages
        easier to understand. We are not affiliated with any lending institution or
        mortgage broker and our goal is to provide transparent and impartial advice.
      </p>
    </div>
  )
}