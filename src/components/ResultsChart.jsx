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
    labels: resultsTable.map(row => (row.currentDate.toString().split(',')[1])),
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

        <table className="table-auto text-sm">
          <tbody>
            <tr className={'bg-white hover:bg-blue-100 transition-all'}>
              <td className="border px-4 py-2">Zero balance date</td>
              <td className="border px-4 py-2 text-right">{resultsTable[resultsTable.length - 1]?.currentDate || 0}</td>
            </tr>
            <tr className={'bg-white hover:bg-blue-100 transition-all'}>
              <td className="border px-4 py-2">Average scheduled payment</td>
              <td className="border px-4 py-2 text-right">{`$${resultsTable[0]?.totalPMT.toLocaleString() || 0}`}</td>
            </tr>
            <tr className={'bg-white hover:bg-blue-100 transition-all'}>
              <td className="border px-4 py-2">Payback period</td>
              <td className="border px-4 py-2 text-right">{`${moment.duration(moment(resultsTable[resultsTable.length - 1]?.currentDate).diff(moment(resultsTable[0]?.currentDate))).asYears().toFixed(1) || 0} (Years)`}</td>
            </tr>
            <tr className={'bg-white hover:bg-blue-100 transition-all'}>
              <td className="border px-4 py-2">Total interest paid</td>
              <td className="border px-4 py-2 text-right">${Number(interestTable[interestTable.length - 1]).toLocaleString() || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
