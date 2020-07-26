import React from 'react'

const ResultsTable = ({ resultsTable }) => {
  if (!resultsTable) {
    return null
  }

  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-white">
          <th className="px-4 py-2">Payment Number</th>
          <th className="px-4 py-2">Opening Balance</th>
          <th className="px-4 py-2">Scheduled PMT</th>
          <th className="px-4 py-2">Lump Sum</th>
          <th className="px-4 py-2">Total PMT</th>
          <th className="px-4 py-2">Principal</th>
          <th className="px-4 py-2">Interest</th>
          <th className="px-4 py-2">Ending Balance</th>
        </tr>
      </thead>
      <tbody>
        {resultsTable.map((row, index) => (
          <tr key={index} className={(index + 1) % 2 === 0 ? 'bg-white hover:bg-blue-100 transition-all' : 'bg-gray-100 hover:bg-blue-100 transition-all'}>
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2 text-right">${Number(row.openingBalance).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.schedPMT).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.lumpSumAmount).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.totalPMT).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.principal).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.interest).toLocaleString().split('.')[0]}</td>
            <td className="border px-4 py-2 text-right">${Number(row.endingBalance).toLocaleString().split('.')[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ResultsTable
