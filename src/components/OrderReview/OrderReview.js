import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setproducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const handleRemove = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    };
     const handlePlaceOrder =() => {
          
        //    setCart([]);
        //    clearTheCart();
        history.push('./shipping');
     }
    return (
        <div className="shop-container">
            <div className="product-container">
               {
                   cart.map(product=> <ReviewItem 
                    key={product.key}
                    handleRemove={handleRemove}
                    product={product}></ReviewItem>)
               }
            </div>
            <div className="cart-container">
              <Cart cart={cart}>
                  <button onClick={handlePlaceOrder} className="btn-regular">Proceed to shipping</button>
              </Cart>
            </div>
        </div>
    );
};

export default OrderReview;