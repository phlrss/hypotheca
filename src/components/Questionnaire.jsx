import React, { useReducer } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { initialState, stateMap, questionnaireReducer as reducer } from '../reducers/questionnaireUtils'

export const Questionnaire = ({ setResults }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateValue = () => {
    const value = state[state.stepNum]

    if (!value) {
      dispatch({ type: 'ERROR_STATE', message: 'Value is required' })
    } else {
      switch(state.stepNum) {
        case 'mortgageAmount':
        case 'interestRate':
          if (!parseInt(value)) {
            dispatch({ type: 'ERROR_STATE', message: 'Invalid symbols in field' })
          } else {
            dispatch({ type: 'NEXT_STEP' })
          }
          break
        case 'startDate':
          const split = value.split('-')
          if (isNaN(new Date(value).getFullYear())) {
            dispatch({ type: 'ERROR_STATE', message: 'Invalid date' })
          } else if (split.length !== 3 || split[0].length !== 4 || split[1].length !== 2 || split[2].length !== 2) {
            dispatch({ type: 'ERROR_STATE', message: 'Invalid date format' })
          } else {
            dispatch({ type: 'NEXT_STEP' })
          }
          break
        default:
          dispatch({ type: 'NEXT_STEP' })
      }
    }
  }

  const getFrequency = () => {
    const total = parseInt(state.personalFrequency) + parseInt(state.interestImportance) + parseInt(state.lumpSumImportance)
    let frequency

    if (total <= 3) {
      frequency = 'monthly'
    } else if (total <= 6) {
      frequency = 'semimonthly'
    } else if (total <= 9) {
      frequency = 'accbiweekly'
    } else if (total <= 12) {
      frequency = 'accweekly'
    }

    dispatch({ type: 'UPDATE_FREQUENCY', frequency })
    return frequency
  }

  return (
    <div className="flex flex-col w-full max-w-xl p-2">
      {/* <span className="mt-5 mb-2 font-bold text-gray-700">Just answer a few simple questions:</span> */}
      <div className="p-5 mt-4 bg-white rounded flex flex-col shadow-md w-full">
        {state.stepNum === 'mortgageAmount' && <div className="mb-3">
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
        {state.stepNum === 'interestRate' && <div className="mb-3">
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
        {state.stepNum === 'amortization' && <div className="mb-3">
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
        {state.stepNum === 'frequency' && <div className="mb-3">
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
        {state.stepNum === 'startDate' && <div className="mb-3">
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
        {state.stepNum === 'personalFrequency' && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            How often do you get paid (i.e. for employment or self-employment income)
          </label>
          <select onChange={ev => dispatch({ type: 'UPDATE_PERSONAL_FREQUENCY', frequency: ev.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="1">Monthly</option>
            <option value="2">Semi-Monthly</option>
            <option value="3">Bi-Weekly</option>
            <option value="4">Weekly</option>
          </select>
        </div>}
        {state.stepNum === 'interestImportance' && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            How important is it to you to save interest on your mortgage?
          </label>
          <select onChange={ev => dispatch({ type: 'UPDATE_INTEREST_IMPORTANCE', interest: ev.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="1">Not Important</option>
            <option value="3">Important</option>
          </select>
        </div>}
        {state.stepNum === 'lumpSumImportance' && <div className="mb-3">
          <label className="block text-gray-600 text-sm font-bold mb-2">
            How likely are you to make additional lump-sum payments on your mortgage?
          </label>
          <select onChange={ev => dispatch({ type: 'UPDATE_INTEREST_IMPORTANCE', interest: ev.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
            <option value="1">Very Unlikely</option>
            <option value="2">Unlikely</option>
            <option value="3">Likely</option>
            <option value="4">Very Likely</option>
          </select>
        </div>}

        { state.error && <label className="text-sm text-red-600 font-bold mb-3">*{state.errorMessage}</label> }

        <div className="w-full flex justify-between">
          <button
            disabled={state.stepNum === stateMap[0]}
            onClick={() => dispatch({ type: 'PREV_STEP' })}
            className={cn(
              'bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
              {
                'cursor-not-allowed opacity-50': state.stepNum === stateMap[0]
              })}>
              Back
          </button>
          {state.stepNum !== stateMap[stateMap.length - 1] && <button
            onClick={() => validateValue()}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Continue
          </button>}
          {state.stepNum === stateMap[stateMap.length - 1] && <Link
            onClick={() => {
              const frequency = getFrequency()
              setResults({ ...state, frequency })
            }}
            to="/frequency"
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Finish
          </Link>}
        </div>
      </div>
    </div>
  )
}
