import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Questionnaire from './components/Questionnaire';
import ResultsTable from './components/ResultsTable';
import LandingPage from './components/LandingPage';

function App() {
  const [resultsTable, setResultsTable] = useState()
  return (
    <Router>
      <div className="app flex flex-col h-screen">
        <Header />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/calculate">
            <div className="flex flex-auto justify-center overflow-y-auto">
              {!resultsTable && <Questionnaire setResultsTable={setResultsTable} />}
              {resultsTable && <ResultsTable resultsTable={resultsTable} />}
            </div>
          </Route>
          <Route path="*">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
