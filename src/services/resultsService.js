/* eslint-disable eqeqeq */
export const generateResultsTable = results => {
  const resultsTable = []
  const { mortgageAmount, interestRate, amortization, lumpSumAmount } = results
  let lumpSumInt = 0;
  if (lumpSumAmount) {
    lumpSumInt = parseInt(lumpSumAmount)
  }

  const period = amortization * 26
  const rate = Math.pow((1+((interestRate/100)/2)),(2/26))-1

  for (let i = 0; i < period; i++) {
    const openingBalance = i === 0 ? parseInt(mortgageAmount) : resultsTable[i - 1].endingBalance
    const interest = openingBalance * rate
    const schedPMT = Math.min(-1 * PMT((Math.pow(((interestRate/100/2)+1), 1/6) - 1)*12/26, period, mortgageAmount), openingBalance)
    const totalPMT = schedPMT + lumpSumInt
    const principal = Math.max(schedPMT - interest + lumpSumInt, 0)
    const endingBalance = Math.max(openingBalance - principal, 0)

    if(openingBalance <= 0) {
      break;
    }

    resultsTable.push({
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
