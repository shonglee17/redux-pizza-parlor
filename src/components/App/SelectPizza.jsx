import {useSelector} from 'react-redux'


function SelectPizza(){
    const listOfPizzas = useSelector((store)=>store.listOfPizzas)
    
    const addPizza = () => {
        console.log('hi');
    }



    return(
        <>
            
                
                    {listOfPizzas.map((pizzas)=>{
                        return(
                        
                            <div key={pizzas.id}>
                                <div>{pizzas.name}</div>
                                <img src={pizzas.image_path} onClick={() => addLike(id)}></img>
                                <div >{pizzas.description}</div>
                                <div>{pizzas.price}</div>
                           </div>
                        
                        )
                    })}
               
            
        </>
    )
}
export default SelectPizza;

