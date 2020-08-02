import React, { useReducer } from 'react';
import { initialState, questionnaireReducer as reducer } from '../reducers/questionnaireUtils'

const QuickEdit = ({ resultsState = initialState, setResults }) => {
  const [state, dispatch] = useReducer(reducer, resultsState);

  const validateValue = () => {}

  return (
    <div className="p-2 mb-1 bg-white items-center justify-between rounded flex shadow-md w-full">
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
  )
}

export default QuickEdit
