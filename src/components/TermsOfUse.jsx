import React, { useEffect } from 'react'

export const TermsOfUse = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border">
      <h1 className="text-3xl text-gray-800 mb-5">Terms of use</h1>
      <p>
        By accessing this website (the “website”), you acknowledge these terms and conditions of use and agree to be bound by them.
        If you do not agree to these terms, please discontinue accessing the website immediately.
      </p>
      <p className="mt-4">
        We reserve the right, in our sole discretion, to modify, alter or otherwise update these terms and conditions at any time and
        you agree to be bound by such modifications, alterations or updates.
      </p>
      <p className="mt-4">
        Every effort has been made to ensure that the material contained on the website is accurate at the time of publication.
        However, Lenderia will not under any circumstances be liable to you or any other person in any way for any loss or damages
        (direct, indirect, special, economic, incidental, consequential, punitive or exemplary, including without limitation loss
        of revenue, data, anticipated profits or lost business) in respect of use of, or inability to use, or any reliance on,
        the website, any of its content or links (including without limitation any inaccuracies or viruses), or any web browser or other equipment.
      </p>
      <p className="mt-4">
        By accessing the website, you agree to indemnify and hold harmless Lenderia, officers and employees from and against any and all actions,
        proceedings, costs, claims, liabilities, damages and expenses (including reasonable legal fees) arising from or in connection with a breach
        of these terms and conditions or the use of this website.
      </p>
      <p className="mt-4">
        The contents of the website are protected by applicable copyright and trademark laws. Unauthorized use or exploitation of such content is
        strictly prohibited including without limitation, unauthorized downloading, retransmission, storage in any medium, copying, redistribution,
        reproduction, or republication of the website, or any part thereof, for any purpose.
      </p>
      <p className="mt-4">
        Links to other websites should not be taken as Lenderia’s endorsement or approval of such other sites, the third parties named therein,
        or their products and services, nor is any liability assumed for incompatibility, non-suitability, viral infection or other destructive/disruptive
        components on or from such other sites.
      </p>
      <p className="mt-4">
        The Internet is not a secure medium and privacy cannot be ensured. Communications over the Internet are vulnerable to interception and forging.
        Lenderia cannot guarantee complete confidentiality or security for information that is transmitted electronically. By accessing the website,
        you acknowledge that Lenderia is not responsible for any damages or losses you may suffer as a result of your electronic transmission of
        information to us. Please refer to our privacy policy for more information.
      </p>
      <p className="mt-4">
        These terms and conditions are governed by the laws of Quebec and the laws of Canada applicable therein, excluding any conflict of laws which
        would lead to the application of any other laws. By accessing the website, you hereby irrevocably submit and attorn to the provincial and federal
        courts located in the City of Montreal, Quebec for any disputes or matters arising from, connected with, or relating to the website, this
        agreement or any related matters.
      </p>
    </div>
  )
}