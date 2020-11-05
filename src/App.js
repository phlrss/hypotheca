import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { Header } from './components/Header';
import { Questionnaire } from './components/Questionnaire';
import { LandingPage } from './components/LandingPage';
import { QuickEdit } from './components/QuickEdit';
import { FAQ } from './components/FAQ';
import { FAQTiles } from './components/FAQTiles';
import { Question } from './components/Question';
import { FrequencyResults } from './components/FrequencyResults';
import { ResultsPage } from './components/ResultsPage';
import { initialState } from './reducers/questionnaireUtils';
import { Footer } from './components/Footer';
import { WhoWeAre } from './components/WhoWeAre';
import { ContactUs } from './components/ContactUs';
import { Donate } from './components/Donate';
import { Resources } from './components/Resources';
import { TermsOfUse } from './components/TermsOfUse';
import { Privacy } from './components/Privacy';
import { Terminology } from './components/Terminology';
import { BlogList } from './components/BlogList';
import { Blog } from './components/Blog';

function App() {
  const [results, setResults] = useState(initialState)
  const [faqPosition, setFaqPosition] = useState()

  return (
    <Router>
      <div className="app flex flex-col h-screen overflow-hidden">
        <Header setFaqPosition={setFaqPosition} />
        <div id="app-body" className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex-1 mb-3 app-main">
            <Switch>
              <Route exact path="/">
                <div className="flex-auto">
                  <LandingPage />
                  <div className="bg-gray-500 shadow-md">
                    <BlogList blogIds={['how-often-should-i-pay-my-mortgage-and-does-it-really-matter', 'working-from-home-you-may-be-eligible-for-a-home-related-tax-deduction', 'how-should-i-go-about-shopping-for-the-best-mortgage']} />
                  </div>
                  <FAQTiles setFaqPosition={setFaqPosition} />
                </div>
              </Route>
              <Route exact path="/question">
                <div className="flex flex-auto justify-center">
                  <Question />
                </div>
              </Route>
              <Route exact path="/calculate">
                <div className="flex flex-auto justify-center">
                  <Questionnaire setResults={setResults} />
                </div>
              </Route>
              <Route exact path="/frequency">
                <div className="flex flex-col flex-auto items-center">
                  <FrequencyResults results={results} />
                </div>
              </Route>
              <Route exact path="/results">
                <div className="flex flex-col flex-auto items-center">
                  <QuickEdit resultsState={results} setResults={setResults} />
                  <ResultsPage results={results} />
                </div>
              </Route>
              <Route exact path="/faq">
                <div className="flex flex-auto justify-center">
                  <FAQ faqPosition={faqPosition} />
                </div>
              </Route>
              <Route path="/who-we-are">
                <div className="flex-auto">
                  <WhoWeAre />
                </div>
              </Route>
              <Route path="/contact-us">
                <div className="flex-auto">
                  <ContactUs />
                </div>
              </Route>
              <Route path="/donate">
                <div className="flex-auto">
                  <Donate />
                </div>
              </Route>
              <Route path="/resources">
                <div className="flex-auto">
                  <Resources />
                </div>
              </Route>
              <Route path="/terms-of-use">
                <div className="flex-auto">
                  <TermsOfUse />
                </div>
              </Route>
              <Route path="/privacy">
                <div className="flex-auto">
                  <Privacy />
                </div>
              </Route>
              <Route path="/terminology">
                <div className="flex-auto">
                  <Terminology />
                </div>
              </Route>
              <Route path="/blogs/:id" component={Blog}>
              </Route>
              <Route path="/blogs">
                <BlogList />
              </Route>
              <Route path="*">
                <div className="flex-auto">
                  <LandingPage />
                  <div className="bg-gray-500 bg-opacity-25 shadow-md">
                    <BlogList blogIds={['how-often-should-i-pay-my-mortgage-and-does-it-really-matter', 'working-from-home-you-may-be-eligible-for-a-home-related-tax-deduction', 'how-should-i-go-about-shopping-for-the-best-mortgage']} />
                  </div>
                  <FAQTiles setFaqPosition={setFaqPosition} />
                </div>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
