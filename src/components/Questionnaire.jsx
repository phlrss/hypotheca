import React, { useReducer } from 'react'
import cn from 'classnames'
import { generateResultsTable } from '../services/resultsService';

const initialState = {
  mortgageAmount: '',
  interestRate: '',
  amortization: '',
  lumpSum: false,
  lumpSumAmount: '',
  startDate: '',
  stepNum: 0,
  error: false,
  errorMessage: ''
};

const stateMap = {
  0: 'mortgageAmount',
  1: 'interestRate',
  2: 'amortization',
  3: 'lumpSum',
  4: 'lumpSumAmount',
  5: 'startDate'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MORTGAGE':
      return {
        ...state,
        mortgageAmount: action.mortgage,
        error: false
      }
    case 'UPDATE_INTEREST':
      return {
        ...state,
        interestRate: action.interest,
        error: false
      }
    case 'UPDATE_AMORTIZATION':
      return {
        ...state,
        amortization: action.amortization,
        error: false
      }
    case 'UPDATE_LUMP_SUM':
      return {
        ...state,
        lumpSum: [true, 'true'].includes(action.lumpSum),
        error: false
      }
    case 'UPDATE_LUMP_AMOUNT':
      return {
        ...state,
        lumpSumAmount: action.lumpSumAmount,
        error: false
      }
    case 'ERROR_STATE': {
      return {
        ...state,
        error: true,
        errorMessage: action.message
      }
    }
    case 'PREV_STEP':
      let prevStep = state.stepNum - 1
      if (state.stepNum === 5 && !state.lumpSum) {
        prevStep = 3
      } else if (state.stepNum === 0) {
        prevStep = state.stepNum
      }
      return {
        ...state,
        stepNum: prevStep,
        error: false
      }
    case 'NEXT_STEP':
      let nextStep = state.stepNum + 1
      if (state.stepNum === 3 && !state.lumpSum) {
        nextStep = 5
      } else if (state.stepNum === 4) {
        nextStep = state.stepNum
      }
      return {
        ...state,
        stepNum: nextStep
      }
    default:
      throw new Error();
  }
}

const Questionnaire = ({ setResultsTable }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateValue = () => {
    const value = state[stateMap[state.stepNum]]

    if (!value && state.stepNum !== 3) {
      dispatch({ type: 'ERROR_STATE', message: 'Value is required' })
    }
    else if (!parseInt(value) && state.stepNum !== 3) {
      dispatch({ type: 'ERROR_STATE', message: 'Invalid symbols in field' })
    } else {
      dispatch({ type: 'NEXT_STEP' })
    }
  }

  return (
    <div className="flex flex-col w-full max-w-xl">
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
            />
        </div>}
        {state.stepNum === 3 && <div className="mb-3">
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
        {state.stepNum === 4 && <div className="mb-3">
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
          {state.stepNum !== 4 && !(state.stepNum === 3 && !state.lumpSum) && <button
            disabled={state.stepNum === 4 || (state.stepNum === 3 && !state.lumpSum) || state.error}
            onClick={() => validateValue()}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Next
          </button>}
          {(state.stepNum === 4 || (state.stepNum === 3 && !state.lumpSum)) && <button
            onClick={() => setResultsTable(generateResultsTable(state))}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Finish
          </button>}
        </div>
      </div>
    </div>
  )
}

export default Questionnaire
