import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product);
    const{name, img, price, seller, stock, star} = props.product
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <p><small>by:{seller}</small></p>
            <p>${price}</p>
            <p>only {stock} left in stock - order soon</p>
            <Rating
             initialRating={star}
             emptySymbol='far fa-star star-icon'
             fullSymbol='fas fa-star star-icon'
            readonly> </Rating>
            <br />
            <button onClick={()=>props.handleAddToCart(props.product)}
             className="btn-regular">
                <FontAwesomeIcon icon={faShoppingCart}/> add to cart
            </button>
            </div>
        </div>
    );
};

export default Product;