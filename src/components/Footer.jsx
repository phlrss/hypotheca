import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  const sections = [
    {
      header: 'Lenderia',
      links: [{ title: 'Who we are', to: '/who-we-are' }, { title: 'Contact us', to: '/contact-us' }, { title: 'Donate', to: '/donate' }]
    },
    {
      header: 'Resources',
      links: [{ title: 'Mortgage resources', to: '/resources' }, { title: 'Mortgage terminology', to: '/terminology' }, { title: 'FAQ', to: '/faq' }]
    },
    {
      header: 'Legal',
      links: [{ title: 'Terms of use', to: '/terms-of-use' }, { title: 'Privacy', to: '/privacy' }]
    },
    // {
    //   header: 'Social',
    //   links: [{ title: 'Facebook', to: '/' }, { title: 'Instagram', to: '/' }, { title: 'LinkedIn', to: '/' }]
    // }
  ]

  return (
    <div className="flex flex-col md:flex-row justify-center p-16 md:p-8 bg-green-600">
      {sections.map(e => (
        <div key={e.header} className="flex flex-col my-3 md:my-0 mx-8 text-white">
          <h2 className="font-bold">{e.header}</h2>
          {e.links.map(link => (
            <Link key={link.title.replace(' ', '')} className="hover:underline" to={link.to}>{link.title}</Link>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Footer