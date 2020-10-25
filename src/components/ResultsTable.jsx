import React from 'react'
import { generateResultsTable } from '../services/resultsService';

export const ResultsTable = ({ results }) => {
  if (!results) {
    return null
  }

  const resultsTable = generateResultsTable(results)

  return (
    <div className="w-screen lg:justify-center flex overflow-auto">
      <table className="table-auto">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 table-col">Payment #</th>
            <th className="px-4 py-2 table-col">Payment Date</th>
            <th className="px-4 py-2 table-col">Opening Balance</th>
            <th className="px-4 py-2 table-col">Scheduled Payment</th>
            <th className="px-4 py-2 table-col">Additional Lump-sum</th>
            <th className="px-4 py-2 table-col">Total Payment</th>
            <th className="px-4 py-2 table-col">Principal</th>
            <th className="px-4 py-2 table-col">Interest</th>
            <th className="px-4 py-2 table-col">Ending Balance</th>
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
  )
}
