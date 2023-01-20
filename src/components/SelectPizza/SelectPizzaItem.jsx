import {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';

function SelectPizzaItem({pizzas , totalAmount, setTotalAmount}) {
    const dispatch = useDispatch()
    let [addedOrNot, setAddedOrNot] = useState(false)
    
    const addPizza = (pizza) => {
        let price = Number(pizza.price);
        setTotalAmount(totalAmount + price )
        
        dispatch({
            type: 'SELECT_PIZZA',
            payload: pizza

          })

          setAddedOrNot(!addedOrNot);
          
    }

    const removePizza = (pizza) => {
        let price = Number(pizza.price);
        setTotalAmount(totalAmount - price )
        
        dispatch({
            type: 'REMOVE_PIZZA',
            payload: pizza
          })
          setAddedOrNot(!addedOrNot);
          
    }
  return (
    
      <div  className="boxes">
        <div>{pizzas.name}</div>
        <div>{pizzas.description}</div>
        <div>{pizzas.price}</div>
        {addedOrNot ? (
          <div>
            <button onClick={() => removePizza(pizzas)}>REMOVE PIZZA</button>
          </div>
        ) : (
          <div>
            <button onClick={() => addPizza(pizzas)}>ADD PIZZA</button>
          </div>
        )}
        <img src={pizzas.image_path} />
      </div>
    
  );
}

export default SelectPizzaItem;
