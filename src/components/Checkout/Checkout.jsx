import './Checkout.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout(){
    const handleClicks = () =>{
        handleCheckout()
        history.push('/dsgd')
    }
    const handleCheckout = () =>{
        axios({
            method: 'POST',
            url: '/api/order'
          }).then ((response) => {
            alert('Order Confirmed!')
            history.push('/dsgd')
          }).catch((error) => {
            console.log('useEffect failed:', error);
          })
     
    }



    const history = useHistory();
    return(
        <>
        <h1>Step 3: Checkout</h1>
        <h2>
            <div>John Smith</div>
            <div>555 Applewood Lane</div>
            <div>Mineapolis, MN</div>
        </h2>
        <div id='delivery'>For Delivery</div>

        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Cost</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cheese</td>
                    <td>$14.99</td>
                </tr>
            </tbody>
        </table>
        <div id='total'>Total: </div>
        <button id='checkout' onClick={handleClicks}>Checkout</button>
        </>

    )
}
export default Checkout;