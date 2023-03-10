import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import SelectPizza from '../SelectPizza/SelectPizza';
import CustomerInformation from '../CustomerInformation/CustomerInformation';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin'


function App() {
  const dispatch = useDispatch();
  useEffect(() => {fetchPizza()},[]);
  const fetchPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then ((response) => {
      console.log(response.data)
      dispatch({
        type: 'GET_PIZZA',
        payload: response.data
    })

    }).catch((error) => {
      console.log('useEffect failed:', error);
    })
}


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

