import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function CustomerInformation() {

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');
    const [isDelivery, setIsDelivery] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const submitOrder = () => {
        let orderType = 'pickup';
        if (isDelivery === true) {
            orderType = 'delivery';
        }
        dispatch({
            type: 'SUBMIT_CUSTOMER_INFO',
            payload: {
                customer_name: customerName,
                street_address: customerAddress,
                city: customerCity,
                zip: customerZip,
                type: orderType
            }
        })
        history.push('/checkout');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitOrder();
    };

    return(
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit}>
            <input
                value={customerName}
                placeholder="Name"
                type="text"
                onChange={(event) => setCustomerName(event.target.value)}
            />
            <input
                value={customerAddress}
                placeholder="Street Address"
                type="text"
                onChange={(event) => setCustomerAddress(event.target.value)}
            />
            <input 
                value={customerCity}
                placeholder="City"
                type="text"
                onChange={(event) => setCustomerCity(event.target.value)}
            />
            <input
                value={customerZip}
                placeholder="Zipcode"
                type="text"
                onChange={(event) => setCustomerZip(event.target.value)}
            />
            <label>
                <input
                    type="radio"
                    value={false}
                    checked={isDelivery === false}
                    name="order_type"
                    onChange={(evt) => setIsDelivery(evt.target.value)}
                />
                Pickup
            </label>
            <label>
                <input
                    type="radio"
                    value={true}
                    checked={isDelivery === true}
                    name="order_type"
                    onChange={(evt) => setIsDelivery(evt.target.value)}
                />
                Delivery
            </label>
            <button type="submit">Next</button>
        </form>
        </>
    )
}
export default CustomerInformation;