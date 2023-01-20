import {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
function SelectPizza(){
    const listOfPizzas = useSelector((store)=>store.listOfPizzas)
    const dispatch = useDispatch()
    const [totalAmount, setTotalAmount] = useState(0)
    
    let [addedOrNot, setAddedOrNot] = useState(false)
    
    const addPizza = (pizza) => {
        let price = Number(pizza.price);
        setTotalAmount(totalAmount + price )
        console.log(pizza);
        dispatch({
            type: 'SELECT_PIZZA',
            payload: pizza

          })

          
          setAddedOrNot(!addedOrNot);
          
        // let numberPrice = Number(price)
        // setTotalAmount(totalAmount + numberPrice)
    }



    const handleNextButton = event => {
      
        // spread: give me everything in pitcherList, then add this new thing
        // setPitcherList([...pitcherList, newPitcher]);
        // setNewPitcher('');
      };

    return(
        <>
            
                
                    {listOfPizzas.map((pizzas)=>{
                        return(
                        
                            <div key={pizzas.id} className="boxes" >
                                <div>{pizzas.name}</div>
                                <div>{pizzas.description}</div>
                                <div>{pizzas.price}</div>
                                {addedOrNot ? (
                                <div><button onClick={() =>addPizza(pizzas)} >REMOVE PIZZA</button></div>):
                                (<div><button onClick={() =>addPizza(pizzas)} >ADD PIZZA</button></div>)
                    }
                                <img src={pizzas.image_path}/>
                           </div>
                        
                        )
                    })}
            <div>TOTAL : {totalAmount} </div>
            <Router>
                <Link to="/customer">NEXT</Link>
            </Router>
        </>
    )
}
export default SelectPizza;

