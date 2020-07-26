/* eslint-disable eqeqeq */
import moment from 'moment';

export const generateResultsTable = results => {
  const resultsTable = []
  const { mortgageAmount, interestRate, amortization, lumpSumAmount, frequency, startDate } = results
  let lumpSumInt = 0;
  if (lumpSumAmount) {
    lumpSumInt = parseInt(lumpSumAmount)
  }

  console.log(moment(startDate).format('ll'))

  let paymentFrequency = 12
  let dateAdd
  switch(frequency) {
    case 'monthly':
      paymentFrequency = 12
      dateAdd = { num: 1, type: 'months' }
      break;
    case 'biweekly':
      paymentFrequency = 26
      dateAdd = { num: 14, type: 'days' }
      break;
    case 'weekly':
      paymentFrequency = 52
      dateAdd = { num: 7, type: 'days' }
      break;
    default:
      paymentFrequency = 12
      dateAdd = { num: 1, type: 'months' }
  }

  const period = amortization * paymentFrequency
  const rate = Math.pow((1+((interestRate/100)/2)),(2/paymentFrequency))-1

  for (let i = 0; i < period; i++) {
    const openingBalance = i === 0 ? parseInt(mortgageAmount) : resultsTable[i - 1].endingBalance
    const currentDate = i === 0 ? moment(startDate).format('MMM DD YYYY') : moment(resultsTable[i - 1].currentDate).add(dateAdd.num, dateAdd.type).format('MMM DD YYYY')
    const interest = openingBalance * rate
    const schedPMT = Math.min(-1 * PMT((Math.pow(((interestRate/100/2)+1), 1/6) - 1)*12/paymentFrequency, period, mortgageAmount), openingBalance)
    const totalPMT = schedPMT + lumpSumInt
    const principal = Math.max(schedPMT - interest + lumpSumInt, 0)
    const endingBalance = Math.max(openingBalance - principal, 0)

    console.log(currentDate)

    if(openingBalance <= 0) {
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

const roundToDecimals = (num) => {
  return (Math.round(num*100)/100).toFixed(2)
}

const PMT = (rate, nper, pv, fv, type) => {
  if (!fv) fv = 0;
  if (!type) type = 0;

  if (rate == 0) return -(pv + fv)/nper;

  var pvif = Math.pow(1 + rate, nper);
  var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

  if (type == 1) {
    pmt /= (1 + rate);
  };

  return pmt;
}
