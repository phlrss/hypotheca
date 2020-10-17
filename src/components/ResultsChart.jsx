import React from 'react'
import { generateResultsTable } from '../services/resultsService'
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export const ResultsChart = ({ results }) => {
  if (!results) {
    return null
  }

  const resultsTable = generateResultsTable(results)
  const interestTable = []
  resultsTable.forEach((e, i) => {
    if (!interestTable.length) {
      interestTable.push(parseInt(e.interest))
    } else {
      interestTable.push(parseInt(interestTable[i - 1]) + parseInt(e.interest))
    }
  })
  const data = {
    labels: resultsTable.map(row => (row.currentDate.toString())),
    datasets: [
      {
        label: "Remaining Balance",
        data: resultsTable.map(e => e.endingBalance),
        fill: true,
        backgroundColor: "rgba(2, 149, 0, 0.2)",
        borderColor: "rgba(2, 149, 0, 1)",
        borderWidth: 1,
        pointRadius: 0
      },
      {
        label: "Interest Paid",
        data: interestTable,
        fill: true,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(75, 75, 75, 1)",
        borderWidth: 1,
        pointRadius: 0
      }
    ]
  }

  return (
    <div className="bg-white rounded shadow-md w-full max-w-xl">
      <div className="p-5 flex flex-col items-center w-full">
        <Line data={data} />

        <div className="mt-3 text-sm">
          {`Zero balance date: ${resultsTable[resultsTable.length - 1]?.currentDate || 0}`}
          <br/>
          {`Average scheduled payment: ${resultsTable[0]?.totalPMT || 0}`}
          <br/>
          {`Total amortization: ${moment.duration(moment(resultsTable[resultsTable.length - 1]?.currentDate).diff(moment(resultsTable[0]?.currentDate))).asYears().toFixed(2) || 0}`}
          <br/>
          {`Total interest paid $${Number(interestTable[interestTable.length - 1]).toLocaleString() || 0}`}
        </div>
      </div>
    </div>
  )
}
