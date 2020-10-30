import React, { useEffect } from 'react'

export const Terminology = () => {
  useEffect(() => {
    document.getElementById('app-body').scrollTop = 0
  }, [])

  return (
    <div className="flex flex-col p-12 md:p-32 text-gray-700 font-bold text-sm box-border">
      <h1 className="text-3xl text-gray-800 mb-5">Terminology</h1>
      <p>
        Coming soon...
      </p>
    </div>
  )
}