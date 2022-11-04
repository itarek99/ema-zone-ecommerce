import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

function Shop() {
  const { products, count } = useLoaderData();
  const [cartProduct, setCartProduct] = useState([]);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const cartItem = products.find((product) => product._id === id);
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
    const exists = cartProduct.find((product) => product._id === selectedProduct._id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cartProduct, selectedProduct];
    } else {
      const rest = cartProduct.filter((product) => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCartProduct(newCart);

    addToDb(selectedProduct._id);
  };

  const handleClearCart = () => {
    deleteShoppingCart();
    setCartProduct([]);
  };

  return (
    <div className='shop container'>
      <div className='products'>
        {products.map((product) => (
          <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className='cart'>
        <Cart cartProduct={cartProduct} handleClearCart={handleClearCart}>
          <Link to='orders'>
            <button className='review-cart-btn'>Review Orders</button>
          </Link>
        </Cart>
      </div>
      <div className='pagination'>
        <p>you are on page: {page}</p>
        {[...Array(pages).keys()].map((pageNumber) => (
          <button
            className={`${pageNumber + 1 === page ? 'selected' : ''}`}
            onClick={() => setPage(pageNumber + 1)}
            key={pageNumber}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Shop;
