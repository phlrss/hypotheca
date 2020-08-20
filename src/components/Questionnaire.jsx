import React, { useReducer } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { initialState, questionnaireReducer as reducer } from '../reducers/questionnaireUtils'

const stateMap = {
  0: 'mortgageAmount',
  1: 'interestRate',
  2: 'amortization',
  3: 'frequency',
  4: 'lumpSum',
  5: 'lumpSumAmount',
  6: 'startDate'
}

const Questionnaire = ({ setResults }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateValue = () => {
    const value = state[stateMap[state.stepNum]]

    if (!value && ![3, 4].includes(state.stepNum)) {
      dispatch({ type: 'ERROR_STATE', message: 'Value is required' })
    }
    else if (!parseInt(value) && ![3, 4].includes(state.stepNum)) {
      dispatch({ type: 'ERROR_STATE', message: 'Invalid symbols in field' })
    } else {
      dispatch({ type: 'NEXT_STEP' })
    }
  }

  return (
    <div className="flex flex-col w-full max-w-xl p-2">
      <span className="mt-5 mb-2 font-bold text-gray-700">Just answer a few simple questions:</span>
      <div className="p-5 bg-white rounded flex flex-col shadow-md w-full">
        {state.stepNum === 0 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            What is your mortgage amount?
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$200000"
            value={state.mortgageAmount}
            onChange={ev => dispatch({ type: 'UPDATE_MORTGAGE', mortgage: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            />
        </div>}
        {state.stepNum === 1 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            What is your stated interest rate?
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="2.25%"
            value={state.interestRate}
            onChange={ev => dispatch({ type: 'UPDATE_INTEREST', interest: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            />
        </div>}
        {state.stepNum === 2 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            What is your mortgage amortization term (in years)?
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="25"
            value={state.amortization}
            onChange={ev => dispatch({ type: 'UPDATE_AMORTIZATION', amortization: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            />
        </div>}
        {state.stepNum === 3 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            How often will you be making payments?
          </label>
          <select onChange={ev => dispatch({ type: 'UPDATE_FREQUENCY', frequency: ev.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="monthly">Monthly</option>
            <option value="semimonthly">Semi-Monthly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="accbiweekly">Acc. Bi-Weekly</option>
            <option value="weekly">Weekly</option>
            <option value="accweekly">Acc. Weekly</option>
          </select>
        </div>}
        {state.stepNum === 4 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            Will you be making additional lump-sum payments?
          </label>
          <div>
            <label className="text-gray-700 mr-5 font-bold inline-flex items-center">
              No
              <input
                id="check-no"
                onChange={ev => {
                  if (ev.target.checked) {
                    dispatch({ type: 'UPDATE_LUMP_SUM', lumpSum: ev.target.value })
                  }
                }}
                value="false"
                className="ml-1"
                type="radio"
                name="lumpsum" />
            </label>
            <label className="text-gray-700 mr-5 font-bold inline-flex items-center">
              Yes
              <input
                id="check-yes"
                onChange={ev => {
                  if (ev.target.checked) {
                    dispatch({ type: 'UPDATE_LUMP_SUM', lumpSum: ev.target.value })
                  }
                }}
                value="true"
                className="ml-1"
                type="radio"
                name="lumpsum" />
            </label>
          </div>
        </div>}
        {state.stepNum === 5 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            What is the additional lump-sum amount per regularly scheduled payment?
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="$250"
            value={state.lumpSumAmount}
            onChange={ev => dispatch({ type: 'UPDATE_LUMP_AMOUNT', lumpSumAmount: ev.target.value })}
            />
        </div>}
        {state.stepNum === 6 && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            What is your mortgage start date?
          </label>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="YYYY-MM-DD"
            value={state.startDate}
            onChange={ev => dispatch({ type: 'UPDATE_START_DATE', date: ev.target.value })}
            onKeyUp={e => e.keyCode === 13 ? validateValue() : null}
            />
        </div>}
        { state.error && <label className="text-sm text-red-600 font-bold mb-3">*{state.errorMessage}</label> }
        <div className="w-full flex justify-between">
          <button
            disabled={state.stepNum === 0}
            onClick={() => dispatch({ type: 'PREV_STEP' })}
            className={cn(
              'bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
              {
                'cursor-not-allowed opacity-50': state.stepNum === 0
              })}>
              Previous
          </button>
          {state.stepNum !== 6 && <button
            onClick={() => validateValue()}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
          </button>}
          {state.stepNum === 6 && <Link
            onClick={() => setResults(state)}
            to="/results"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Finish
          </Link>}
        </div>
      </div>
    </div>
  )
}

export default Questionnaire
