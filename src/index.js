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

const selectPizzas = (state=[], action) =>{
    if(action.type === 'SELECT_PIZZA'){
        
            
            let newPizzaId = action.payload.id;
            let newPizzaName = action.payload.name;
            let newPizzaPrice = action.payload.price;
            let newPizzaObject = {
                id: newPizzaId,
                name: newPizzaName,
                price: newPizzaPrice,
            }
            let newPizzaArray = [...state];
            newPizzaArray.push(newPizzaObject)
        
        return newPizzaArray;
    }
    return state;
}

const store = createStore(
    combineReducers({
        listOfPizzas,
        selectPizzas,
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
 
