import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
  const { products } = useLoaderData();
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const cartItem = products.find((product) => product.id === id);
      if (cartItem) {
        const quantity = storedCart[id];
        cartItem.quantity = quantity;
        savedCart.push(cartItem);
      }
    }

    setCartProduct(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cartProduct.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cartProduct, selectedProduct];
    } else {
      const rest = cartProduct.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCartProduct(newCart);

    addToDb(selectedProduct.id);
  };

  const handleClearCart = () => {
    deleteShoppingCart();
    setCartProduct([]);
  };

  return (
    <div className='shop container'>
      <div className='products'>
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className='cart'>
        <Cart cartProduct={cartProduct} handleClearCart={handleClearCart}>
          <Link to='orders'>
            <button className='review-cart-btn'>Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}
export default Shop;
