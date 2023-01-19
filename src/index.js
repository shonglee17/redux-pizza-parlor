import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger';

const listOfPizzas = (state=[], action) =>{
    if(action.type === 'GET_PIZZA'){
        let newPizzaArray = [...state];
        for(let pay of action.payload){
            let newPizzaId = pay.id;
            let newPizzaName = pay.name;
            let newPizzaDescription = pay.description;
            let newPizzaPrice = pay.price;
            let newPizzaImagePath = pay.image_path;
            let newPizzaObject = {
                id: newPizzaId,
                name: newPizzaName,
                description: newPizzaDescription,
                price: newPizzaPrice,
                image_path: newPizzaImagePath
            }
            newPizzaArray.push(newPizzaObject)
        }
        return newPizzaArray;
    }
    return state;
}

const newOrder = (state=[], action) => {
  if (action.type === 'SUBMIT_CUSTOMER_INFO') {
    for (let pay of action.payload) {
      let newOrderName = pay.customer_name;
      let newOrderAddress = pay.street_address;
      let newOrderCity = pay.city;
      let newOrderZip = pay.zip;
      let newOrderType = pay.type;
      let newOrderObject = {
        customer_name: newOrderName,
        street_address: newOrderAddress,
        city: newOrderCity,
        zip: newOrderZip,
        type: newOrderType
      }
      return newOrderObject;
    };
  }
  return state;
}
const store = createStore(
    combineReducers({
        listOfPizzas,
        newOrder
    }),
    applyMiddleware(
        logger
    )
 )
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
 );
 
