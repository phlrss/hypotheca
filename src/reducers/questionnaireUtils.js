
export const initialState = {
  mortgageAmount: '',
  interestRate: '',
  amortization: '',
  frequency: '',
  lumpSum: false,
  lumpSumAmount: '',
  startDate: '',
  stepNum: 0,
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
    case 'UPDATE_START_DATE':
      return {
        ...state,
        startDate: action.date,
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
      if (state.stepNum === 6 && !state.lumpSum) {
        prevStep = 4
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
      if (state.stepNum === 4 && !state.lumpSum) {
        nextStep = 6
      } else if (state.stepNum === 6) {
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
