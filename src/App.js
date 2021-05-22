import React from 'react';
import './App.css'; 
import  {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>

      <Switch>
        <Route path="/checkout">
          <h1>Chekout</h1>
        </Route> 
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <h1>Home Page!!!</h1>
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
