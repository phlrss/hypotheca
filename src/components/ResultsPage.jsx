import React from 'react'
import { useState } from 'react'
import { ResultsChart } from './ResultsChart'
import { ResultsTable } from './ResultsTable'

export const ResultsPage = ({ results }) => {
  const [tabState, setTabState] = useState('table')

  return (
    <div className='w-screen items-center flex flex-col mt-2 lg:mt-32'>
      <div className="shadow">
        <button
          className={`py-3 px-6 border border-b-0 focus:outline-none ${tabState === 'table' ? 'bg-white' : 'bg-gray-300'}`}
          onClick={() => setTabState('table')}>
            Schedule
        </button>
        <button
          className={`py-3 px-6 border border-b-0 focus:outline-none ${tabState === 'chart' ? 'bg-white' : 'bg-gray-300'}`}
          onClick={() => setTabState('chart')}>
            Visualization
        </button>
      </div>
      { tabState === 'table' && <ResultsTable results={results} /> }
      { tabState === 'chart' && <ResultsChart results={results} /> }
    </div>
  )
}
