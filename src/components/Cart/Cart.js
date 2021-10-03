import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity =  totalQuantity + product.quantity
    };
    const shipping = total>0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = (total + tax + shipping)
    return (
        <div className="cart">
            <h3 className="cart-title">Order Summary</h3>
            <h3>
                <span className="cart-information-title">Items ordered:</span> {totalQuantity}
            </h3>
            <p>
                <span className="cart-information-title">Total:</span> ${total.toFixed(2)}
            </p>
            <p>
                <span className="cart-information-title">Shipping:</span> ${shipping}
            </p>
            <p>
                <span className="cart-information-title">Tax:</span> ${tax.toFixed(2)}
            </p>
            <p>
                <span className="cart-information-title">Grand-total:</span>${grandTotal.toFixed(2)}
            </p>
            {props.children}
        </div>
    );
};

export default Cart;