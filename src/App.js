import React from 'react';
import SearchBar from "./SearchBar"
import Result from "./Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // to handle routing

function App() {
  return (
    <Router>
      <div className="App">
        < Route 
          path="/result" 
          component={Result} 
       />

        < Route path="/"
            component={SearchBar}
            exact
        />
      </div>

    </Router>
  );
}

export default App;
