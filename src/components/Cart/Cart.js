import './Cart.css';

function Cart({ cartProduct, handleClearCart, children }) {
  const price = cartProduct.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const shipping = cartProduct.reduce((acc, cur) => acc + cur.shipping, 0);
  const tax = +(price * 0.1).toFixed(1);

  let quantity = 0;

  for (const product of cartProduct) {
    quantity += product.quantity;
  }

  return (
    <div className='cart-body'>
      <div className='cart-details'>
        <h2>Order Summery</h2>
        <p>Selected Item: {quantity}</p>
        <p>Price: ${price}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h5>Total: ${price + shipping + tax}</h5>
      </div>
      <div>
        <button className='clear-cart-btn' onClick={handleClearCart}>
          Clear
        </button>
        {children}
      </div>
    </div>
  );
}
export default Cart;
