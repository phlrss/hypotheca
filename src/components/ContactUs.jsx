import React from 'react'

export const ContactUs = () => {
  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border">
      <h1 className="text-3xl text-gray-800 mb-5">Contact Us</h1>
      <p>
        We are here to answer any of your questions regarding mortgages in general,
        the calculation of your mortgage, our mortgage frequency recommendation, or
        any other question you might have.
      </p>
      <p className="mt-4">
        Send us an email any time and we will get back to you as soon as possible!
      </p>
      <p className="mt-4">
        Montreal, QC
      </p>
      <p className="mt-4 text-blue-500 underline">
        info@lenderia.ca
      </p>
    </div>
  )
}