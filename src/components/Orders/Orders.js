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
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='orders container'>
      <div className='orders-item'>
        {cart.map((item) => (
          <OrdersItem removeItemHandler={removeItemHandler} key={item.id} item={item}></OrdersItem>
        ))}

        {cart.length === 0 && (
          <h1>
            Please Add Some Items to Cart <Link to='/'>Shop</Link>
          </h1>
        )}
      </div>
      <div className='cart'>
        <Cart cartProduct={cart} handleClearCart={handleClearCart}>
          <Link to='/'>
            <button className='review-cart-btn'>Place Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};
export default Orders;
