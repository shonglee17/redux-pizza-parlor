import { useState } from 'react'
import { useDispatch, useHistory } from 'react-redux'
function CustomerInformation() {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');
    const [orderType, setOrderType] = useState('delivery');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitOrder = () => {
        axios.post('/api/order', {
            customer_name: customerName,
            street_address: customerAddress,
            city: customerCity,
            zip: customerZip,
            type: orderType
            // total,
            // pizzas,
        }).then(response => {
            dispatch({
                type: 'SUBMIT_ORDER',
                payload: response.data
            })
            history.push('/checkout');
        }).catch(error => {
            console.error('Error in CustomerInformation submitOrder POST:', error);
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (customerName && customerAddress && customerCity && customerZip && orderType) {
            submitOrder();
        } else {
            alert('Please fill out all sections before continuing!')
        };
    };

    return(
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
            />
            <input
                value={customerAddress}
                onChange={(event) => setCustomerAddress(event.target.value)}
            />
            <input 
                value={customerCity}
                onChange={(event) => setCustomerCity(event.target.value)}
            />
            <input
                value={customerZip}
                onChange={(event) => setCustomerZip(event.target.value)}
            />
            <input
                type="radio"
                value={'pickup'}
                checked={orderType === 'pickup'}
                name="order_type"
                onChange={(evt) => setOrderType(evt.target.value)}
            />
            <input
                type="radio"
                value={'delivery'}
                checked={orderType === 'delivery'}
                name="order_type"
                onChange={(evt) => setOrderType(evt.target.value)}
            />
        </form>
        <button onClick>Next</button>
        </>
    )
}
export default CustomerInformation;