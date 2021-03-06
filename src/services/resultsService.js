/* eslint-disable eqeqeq */
import moment from 'moment';

export const getMonthlyResults = results => (generateResultsTable({ ...results, frequency: 'monthly' }))

export const generateResultsTable = results => {
  const resultsTable = []
  const { mortgageAmount, interestRate, amortization, lumpSumAmount, frequency, startDate } = results
  let lumpSumInt = 0;
  if (lumpSumAmount) {
    lumpSumInt = parseInt(lumpSumAmount)
  }

  let paymentFrequency = 12
  let dateAdd
  switch (frequency) {
    case 'monthly':
      paymentFrequency = 12
      dateAdd = { num: 1, type: 'months' }
      break;
    case 'semimonthly':
      paymentFrequency = 24
      dateAdd = { num: 15, type: 'days' }
      break;
    case 'biweekly':
    case 'accbiweekly':
      paymentFrequency = 26
      dateAdd = { num: 14, type: 'days' }
      break;
    case 'weekly':
    case 'accweekly':
      paymentFrequency = 52
      dateAdd = { num: 7, type: 'days' }
      break;
    default:
      paymentFrequency = 12
      dateAdd = { num: 1, type: 'months' }
  }

  const period = amortization * paymentFrequency
  const rate = Math.pow((1 + ((interestRate / 100) / 2)), (2 / paymentFrequency)) - 1

  const isAccBiweekly = frequency === 'accbiweekly'
  const isAccWeekly = frequency === 'accweekly'

  for (let i = 0; i < period; i++) {
    const openingBalance = i === 0 ? parseInt(mortgageAmount) : resultsTable[i - 1].endingBalance
    const currentDate = i === 0 ? moment(startDate).format('MMM D, YYYY') : moment(resultsTable[i - 1].currentDate).add(dateAdd.num, dateAdd.type).format('MMM D, YYYY')
    const interest = openingBalance * rate
    const schedPMT = getSchedPMT(interestRate, paymentFrequency, period, amortization, mortgageAmount, openingBalance, isAccBiweekly, isAccWeekly)
    const totalPMT = schedPMT + lumpSumInt
    const principal = Math.max(schedPMT - interest + lumpSumInt, 0)
    const endingBalance = Math.max(openingBalance - principal, 0)

    if (openingBalance <= 0) {
      break;
    }

    resultsTable.push({
      currentDate: currentDate,
      openingBalance: roundToDecimals(openingBalance),
      schedPMT: roundToDecimals(schedPMT),
      lumpSumAmount: roundToDecimals(lumpSumAmount),
      totalPMT: roundToDecimals(totalPMT),
      principal: roundToDecimals(principal),
      interest: roundToDecimals(interest),
      endingBalance: roundToDecimals(endingBalance)
    })
  }

  return resultsTable
}

const getSchedPMT = (interestRate, paymentFrequency, period, amortization, mortgageAmount, openingBalance, isAccBiweekly, isAccWeekly) => {
  switch (true) {
    case isAccBiweekly:
      return Math.min(-1 * PMT((Math.pow(((interestRate / 100 / 2) + 1), 1 / 6) - 1), 12 * amortization, mortgageAmount) / 2, openingBalance)
    case isAccWeekly:
      return Math.min(-1 * PMT((Math.pow(((interestRate / 100 / 2) + 1), 1 / 6) - 1), 12 * amortization, mortgageAmount) / 4, openingBalance)
    default:
      return Math.min(-1 * PMT((Math.pow(((interestRate / 100 / 2) + 1), 1 / 6) - 1) * 12 / paymentFrequency, period, mortgageAmount), openingBalance)
  }
}

const roundToDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

const PMT = (rate, nper, pv, fv, type) => {
  if (!fv) fv = 0;
  if (!type) type = 0;

  if (rate == 0) return -(pv + fv) / nper;

  var pvif = Math.pow(1 + rate, nper);
  var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

  if (type == 1) {
    pmt /= (1 + rate);
  };

  return pmt;
}
