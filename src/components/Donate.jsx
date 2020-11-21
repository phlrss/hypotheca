import React, { useEffect } from 'react'
import DONATE from '../images/donate.svg'

export const Donate = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  return (
    <div className="inline-flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border bg-white shadow h-full">
      <h1 className="text-3xl text-gray-800 mb-5">Donate</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center">
          <p className="mb-5 max-w-xl">
            If you appreciated this website as much as we enjoyed creating it,
            feel free to support the founders by donating via Paypal using the donate button below. Funds will help support the hosting
            and maintenance of the site.
          </p>
          <form action="https://www.paypal.com/donate" method="post" target="_blank" rel="noopener noreferrer">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="MZCA3SKP9Z9H6" />
            <input type="hidden" name="currency_code" value="CAD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
        <img className="w-48 mt-8 md:mt-0 md:w-64" src={DONATE} alt="donate depiction" />
      </div>
    </div>
  )
}
