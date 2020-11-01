import React from 'react'
import { generateResultsTable } from '../services/resultsService';

export const ResultsTable = ({ results }) => {
  if (!results) {
    return null
  }

  const resultsTable = generateResultsTable(results)

  return (
    <div className="w-screen lg:justify-center flex overflow-auto">
      <div className="p-3 bg-white shadow">
        <table className="table-auto">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-4 py-0 table-col">Payment</th>
              <th className="px-4 py-0 table-col">Payment</th>
              <th className="px-4 py-0 table-col">Opening</th>
              <th className="px-4 py-0 table-col">Scheduled</th>
              <th className="px-4 py-0 table-col">Additional</th>
              <th className="px-4 py-0 table-col">Total</th>
              <th className="border-b-2 border-white py-0 px-0 table-col text-right">Break</th>
              <th className="border-b-2 border-white py-0 px-0 table-col text-left">down</th>
              <th className="px-4 py-0 table-col">Ending</th>
            </tr>
            <tr className="bg-green-600 text-white">
              <th className="px-4 py-0 table-col">#</th>
              <th className="px-4 py-0 table-col">Date</th>
              <th className="px-4 py-0 table-col">Balance</th>
              <th className="px-4 py-0 table-col">Payment</th>
              <th className="px-4 py-0 table-col">Lump-sum</th>
              <th className="px-4 py-0 table-col">Payment</th>
              <th className="px-4 py-0 table-col">Principal</th>
              <th className="px-4 py-0 table-col">Interest</th>
              <th className="px-4 py-0 table-col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {resultsTable.map((row, index) => (
              <tr key={index} className={(index + 1) % 2 === 0 ? 'bg-white hover:bg-blue-100 transition-all' : 'bg-gray-100 hover:bg-blue-100 transition-all'}>
                <td className="border px-4 py-2 table-col">{index + 1}</td>
                <td className="border px-4 py-2 text-right table-col">{row.currentDate}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.openingBalance).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.schedPMT).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.lumpSumAmount).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.totalPMT).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.principal).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.interest).toLocaleString().split('.')[0]}</td>
                <td className="border px-4 py-2 text-right table-col">${Number(row.endingBalance).toLocaleString().split('.')[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
