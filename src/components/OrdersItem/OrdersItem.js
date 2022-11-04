import { FaTrashAlt } from 'react-icons/fa';
import './OrdersItem.css';

const OrdersItem = ({ item, removeItemHandler }) => {
  const { _id } = item;
  return (
    <div className='item-card'>
      <img className='item-card__image' src={item.img} alt={item.name} />
      <div className='item-card__details'>
        <h4 className='item-card__title'>{item.name}</h4>
        <p className='item-card__price'>Price: {item.price}</p>
        <p className='item-card__quantity'>Quantity: {item.quantity}</p>
      </div>
      <button onClick={() => removeItemHandler(_id)} className='delete-btn'>
        <FaTrashAlt></FaTrashAlt>
      </button>
    </div>
  );
};
export default OrdersItem;
