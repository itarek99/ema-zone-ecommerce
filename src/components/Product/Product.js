import { FaCartPlus } from 'react-icons/fa';
import './Product.css';

function Product({ product, handleAddToCart }) {
  const { name, price, img, seller, ratings } = product;
  return (
    <div className='product'>
      <img className='product__img' src={img} alt={name} />
      <div className='product__details'>
        <h4 className='product__title'>{name.length < 25 ? name : name.slice(0, 25) + '...'}</h4>
        <p className='product__price'>Price: ${price}</p>
        <p className='product__seller'>Sold By: {seller}</p>
        <p className='product__rating'>Rating: {ratings} Stars</p>
      </div>
      <button className='add-btn' onClick={() => handleAddToCart(product)}>
        Add To Cart <FaCartPlus></FaCartPlus>
      </button>
    </div>
  );
}
export default Product;
