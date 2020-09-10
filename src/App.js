import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Questionnaire } from './components/Questionnaire';
import { ResultsTable } from './components/ResultsTable';
import { LandingPage } from './components/LandingPage';
import { QuickEdit } from './components/QuickEdit';
import { FAQ } from './components/FAQ';
import { FAQTiles } from './components/FAQTiles';

function App() {
  const [results, setResults] = useState()

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
              <Questionnaire setResults={setResults} />
            </div>
          </Route>
          <Route exact path="/results">
            <div className="flex flex-col flex-auto items-center overflow-y-auto">
              <QuickEdit resultsState={results} setResults={setResults} />
              <ResultsTable results={results} />
            </div>
          </Route>
          <Route exact path="/faq">
            <div className="flex flex-auto justify-center overflow-y-auto">
              <FAQ />
            </div>
          </Route>
          <Route path="*">
            <div className="flex-auto overflow-auto">
              <LandingPage />
              <FAQTiles />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
