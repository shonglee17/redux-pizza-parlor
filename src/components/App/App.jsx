import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SelectPizza from './SelectPizza';
import CustomerInformation from './CustomerInformation';
import Checkout from './Checkout';
import Admin from './Admin'

function App() {


    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
            </header>
            <Router>
                <br/>
                <Route exact path='/'>
                  <SelectPizza />
                </Route>
                <Route exact path='/customer'>
                  <CustomerInformation />
                </Route>
                <Route exact path='/checkout'>
                  <Checkout />
                </Route>
                <Route exact path='/admin'>
                  <Admin />
                </Route>
            </Router>
        </div>
    );
}

export default App;

