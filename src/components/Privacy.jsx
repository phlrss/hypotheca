import React, { useEffect } from 'react'

export const Privacy = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border md:mx-8 bg-white shadow">
      <h1 className="text-3xl text-gray-800 mb-5">Privacy</h1>
      <p>
        Lenderia is committed to protecting the privacy and confidentiality of information in our
        possession and control. This policy describes the manner in which Lenderia collects, uses,
        discloses and otherwise treats information through our website available at Lenderia.ca,
        including all subpages and successor pages (collectively referred to as the “website”) as
        well as through other interactions with our clients and prospective clients.
      </p>
      <p className="mt-4">
        Lenderia currently does not collect or store any user data. Users will be notified of any changes made to the data collection
        policy.
      </p>
      <p className="mt-4">
        In the event of information collection, we may aggregate your Information with our other user’s Information and use that information for
        benchmarking and analysis purposes.
      </p>
      <p className="mt-4">
        Marketing Communications: From time to time, we may obtain your consent to send you email, SMS text
        messages and other communications about Lenderia products, services, or events that may be of interest
        to you. You can opt-out of receiving marketing and promotional email from us by following the unsubscribe
        instructions contained in each of our email communications.
      </p>
      <p className="mt-4">
        Testimonials: If you provide us with a testimonial, with your consent we may post it on our Site or in
        other materials and media, along with your name (as needed). If you want your testimonial removed, please
        contact us at info@lenderia.ca
      </p>
      <p className="mt-4">
        Cookies &amp; Similar Technologies: Cookies are files with small amount of data, which may include an anonymous
        unique identifier. Cookies are sent to your browser from a web site.
        Lenderia may use “cookies” to collect information and remarket to you. You can instruct your browser to
        refuse all cookies or to indicate when a cookie is being sent. We may use cookies
        to help us remember and process the items in your shopping cart, understand and save your preferences for
        future visits, keep track of advertisements and compile aggregate data about the Site’s traffic and interaction
        so that we can offer better experiences and tools in the future. We may also use these technologies to provide
        you with enhanced online display advertising tailored to your interests.
      </p>
      <p className="mt-4">
        Website Analytics: We may use third parties to help us gather and analyze information about the areas visited
        on the Website in order to better understand, evaluate and improve the user experience and the convenience of
        the Website.
      </p>
      <p className="mt-4">
        We ensure that any third party acting on our behalf maintains reasonable and appropriate safeguards in respect
        of Information.
      </p>
      <p className="mt-4">
        Our website may contain links to third-party websites. We do not endorse and we are not responsible for the
        content of any linked external websites or for the privacy practices of the third parties that own and operate
        such sites. Before using any external website, please refer to the terms of use and privacy policies of the
        External Sites for more information.
      </p>
    </div>
  )
}
