import React, { useReducer, useState } from 'react';
import cn from 'classnames'
import { initialState, questionnaireReducer as reducer } from '../reducers/questionnaireUtils'

const QuickEdit = ({ resultsState = initialState, setResults }) => {
  const [state, dispatch] = useReducer(reducer, resultsState)
  const [menuOpen, setMenuOpen] = useState(false)

  const validateValue = () => {}

  return (
    <div className="w-full">
      <div className="block lg:hidden w-full bg-white">
        <button
          onClick={() => setMenuOpen(true)}
          className={cn(
            'm-3 border border-green-300 bg-white text-green-600 text-sm font-bold p-3 rounded-full shadow-md focus:outline-none focus:shadow-outline',
            {
              'hidden': menuOpen
            })}>
            Edit Mortgage Details
        </button>
      </div>
      <div
        className={cn(
          'absolute h-full lg:h-auto flex-col lg:flex-row p-2 pt-3 mb-1 bg-white lg:items-center lg:justify-between rounded lg:flex shadow-md w-full lg:relative',
          {
            'hidden lg:flex': !menuOpen
          })}>
        <button onClick={() => setMenuOpen(false)} className="lg:hidden p-2 absolute top-0 right-0">
          <svg fill="gray" height="15px" viewBox="0 0 365.696 365.696" width="15px" xmlns="http://www.w3.org/2000/svg"><path  d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>
        </button>
        <div className="mx-2">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Mortgage amount
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$200000"
            value={state.mortgageAmount}
            onChange={ev => dispatch({ type: 'UPDATE_MORTGAGE', mortgage: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            onBlur={() => setResults(state)}
            />
        </div>

        <div className="mx-2">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Interest rate
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="2.25%"
            value={state.interestRate}
            onChange={ev => dispatch({ type: 'UPDATE_INTEREST', interest: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            onBlur={() => setResults(state)}
            />
        </div>

        <div className="mx-2">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Amortization term (in years)
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="25"
            value={state.amortization}
            onChange={ev => dispatch({ type: 'UPDATE_AMORTIZATION', amortization: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            onBlur={() => setResults(state)}
            />
          </div>

        <div className="mx-2">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Payment frequency
          </label>
          <select
            value={state.frequency || 'monthly'}
            onChange={ev => dispatch({ type: 'UPDATE_FREQUENCY', frequency: ev.target.value })}
            onBlur={() => setResults(state)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="monthly">Monthly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="accbiweekly">Acc. Bi-Weekly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <div className="mx-2">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Lump-sum amount
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$250"
            value={state.lumpSumAmount}
            onChange={ev => dispatch({ type: 'UPDATE_LUMP_AMOUNT', lumpSumAmount: ev.target.value })}
            onBlur={() => setResults(state)}
            />
        </div>
      </div>
    </div>
  )
}

export default QuickEdit
