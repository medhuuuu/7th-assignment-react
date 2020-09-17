import React from 'react';
import { Button } from 'react-bootstrap';
import './cart.css';

const Cart = (props) => {
    const items = props.cart;
    console.log(items);
    const total = items.reduce( (total, item)=> total + item.price ,0);
    return (
        <div className="d-block cart-part">
            <h1>Order Summary</h1>
            <h5>Total Courses: {items.length}</h5>
            <p>Total Price: ${Math.round(total)}</p>
            <Button  variant="warning">Confirm</Button>
        </div>
    );
};

export default Cart;