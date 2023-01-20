import {useState} from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { useHistory, HashRouter as Router, Link } from 'react-router-dom';
import SelectPizzaItem from './SelectPizzaItem'
function SelectPizza(){
    const listOfPizzas = useSelector((store)=>store.listOfPizzas)
    const [totalAmount, setTotalAmount] = useState(0)
    const history = useHistory()

    return(
        <>
            
                
                    {listOfPizzas.map((pizzas)=>{
                        return(
                            <SelectPizzaItem  totalAmount={totalAmount} setTotalAmount={setTotalAmount} key={pizzas.id} pizzas={pizzas}/>
                        )
                    })}
            <div>TOTAL : {totalAmount} </div>
            <button onClick={() => history.push('/customer')}>NEXT</button>
        </>
    )
}
export default SelectPizza;

