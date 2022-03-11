import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { remove, updateCount } from '../../store/cart'
import './Cart.css'

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  // console.log('****', item)

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className='amount-cart'>
        {item.count === 1 ? `You have ${item.count} item in your cart` :
          `You have ${item.count} items in your cart`}
      </div>
      <div className="item-header">{item.title}</div>
      <div className="cart-item-menu">
        <input
          className='amount-item-input'
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          onBlur={() => dispatch(updateCount(item.id, +count))}
        />
        <button
          onClick={() => dispatch(updateCount(item.id, item.count + 1))}
          className="cart-item-button"
        >
          +
        </button>
        <button
          onClick={() => dispatch(updateCount(item.id, item.count - 1))}
          className="cart-item-button"
        >
          -
        </button>
        <button
          onClick={() => dispatch(remove(item.id))}
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
