import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrdersItem from '../OrdersItem/OrdersItem';

import './Orders.css';

const Orders = () => {
  const { initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);

  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const removeItemHandler = (id) => {
    removeFromDb(id);
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div className='orders container'>
      <div className='orders-item'>
        {cart.map((item) => (
          <OrdersItem removeItemHandler={removeItemHandler} key={item._id} item={item}></OrdersItem>
        ))}

        {cart.length === 0 && (
          <h1>
            Please Add Some Items to Cart <Link to='/'>Shop</Link>
          </h1>
        )}
      </div>
      <div className='cart'>
        <Cart cartProduct={cart} handleClearCart={handleClearCart}>
          <Link to='/shipping' className='review-cart-btn'>
            Proceed Shipment
          </Link>
        </Cart>
      </div>
    </div>
  );
};
export default Orders;
