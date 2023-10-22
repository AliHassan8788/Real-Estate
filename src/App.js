import Home from './app/pages/Home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Home />
        <div className="container mt-4">
          <Routes>
            <Route path="/#" exact>
              Home Content
            </Route>
            <Route path="/#">
              About Content
            </Route>
            <Route path="/#">
              Contact Content
            </Route>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
