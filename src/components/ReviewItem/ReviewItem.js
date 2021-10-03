import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    const {handleRemove} = props
    return (
        <div>
            <h1 className="product-name"> {name} </h1>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <button onClick={()=>handleRemove(key)} className="btn-regular">Remove</button>
        </div>
    );
};

export default ReviewItem;