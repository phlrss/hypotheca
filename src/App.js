import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Questionnaire from './components/Questionnaire';
import ResultsTable from './components/ResultsTable';

function App() {
  const [resultsTable, setResultsTable] = useState()
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center">
        {!resultsTable && <Questionnaire setResultsTable={setResultsTable} />}
        {resultsTable && <ResultsTable resultsTable={resultsTable} />}
      </div>
    </div>
  );
}

export default App;
