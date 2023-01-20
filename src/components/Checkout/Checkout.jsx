import './Checkout.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Checkout(){
    useEffect(() => {totals()},[]);
    let pizza = useSelector((store) => store.selectPizzas)
    let order = useSelector((store) => store.newOrder)
    console.log(pizza);
    console.log(order);
    const [totalAmount, setTotalAmount] = useState(0)
    let newPostPizzaArray = []
    const totals = () =>{
        let sum = 0;
        for(let pizz of pizza ){
            sum += Number(pizz.price) ;
        }
        setTotalAmount(sum);
        for(let pizz of pizza){
            let pizzaId = pizz.id
            let quantity = 1;
            let newPostPizzaObject = {
                pizzaId: pizzaId,
                quantity: quantity
            }
            newPostPizzaArray.push(newPostPizzaObject);
        }
    }
    const handleClicks = () =>{
        handleCheckout()
    }
    const handleCheckout = () =>{
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: order.customer_name,
                street_address: order.street_address,
                city: order.city,
                zip: order.zip,
                total: totalAmount,
                type: order.type,
                pizzas: newPostPizzaArray,

            }
          }).then ((response) => {
            alert('Order Confirmed!')
            history.push('/')
          }).catch((error) => {
            console.log('useEffect failed:', error);
          })
     
    }
    const history = useHistory();
    return(
        <>
        <h1>Step 3: Checkout</h1>
        <h2>
            <div>{order.customer_name}</div>
            <div>{order.street_address}</div>
            <div>{order.city}</div>
        </h2>
        {
            order.type === 'delivery' ? <div id='delivery'>For Delivery</div> : <div id='delivery'>For Pickup</div>
        }
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                {pizza.map((pizz) =>{
                    return (
                    <tr key={pizz.id}>
                        <td>{pizz.name}</td>
                        <td>{pizz.price}</td>
                    </tr>
                    )
                })}
            
            </tbody>
        </table>
        <div id='total'>Total: {totalAmount} </div>
        <button id='checkout' onClick={handleClicks}>Checkout</button>
        </>

    )
}
export default Checkout;