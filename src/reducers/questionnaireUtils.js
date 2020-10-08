export const stateMap = [
  'startDate',
  'mortgageAmount',
  'interestRate',
  'amortization',
  'personalFrequency',
  'interestImportance',
  'lumpSumImportance',
]

export const initialState = {
  mortgageAmount: '',
  interestRate: '',
  amortization: '',
  frequency: 'monthly',
  lumpSumAmount: '',
  startDate: '',
  personalFrequency: '1',
  interestImportance: '1',
  lumpSumImportance: '1',
  stepNum: stateMap[0],
  error: false,
  errorMessage: ''
}

export const questionnaireReducer = (state, action) => {
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
    case 'UPDATE_FREQUENCY':
      return {
        ...state,
        frequency: action.frequency,
        error: false
      }
    case 'UPDATE_LUMP_AMOUNT':
      return {
        ...state,
        lumpSumAmount: action.lumpSumAmount,
        error: false
      }
    case 'UPDATE_START_DATE':
      return {
        ...state,
        startDate: action.date,
        error: false
      }
    case 'UPDATE_PERSONAL_FREQUENCY':
      return {
        ...state,
        personalFrequency: action.frequency,
        error: false
      }
    case 'UPDATE_INTEREST_IMPORTANCE':
      return {
        ...state,
        interestImportance: action.interest,
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
      const current = stateMap.findIndex(e => e === state.stepNum)

      return {
        ...state,
        stepNum: current === 0 ? stateMap[0] : stateMap[current - 1],
        error: false
      }
    case 'NEXT_STEP':
      const currentStep = stateMap.findIndex(e => e === state.stepNum)

      return {
        ...state,
        stepNum: stateMap[currentStep] === stateMap[stateMap.length - 1] ? stateMap[currentStep] : stateMap[currentStep + 1]
      }
    default:
      throw new Error();
  }
}
