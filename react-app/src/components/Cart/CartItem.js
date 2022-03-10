import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { remove, updateCount } from '../../store/cart'

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.title}</div>
      <div className="cart-item-menu">
        <input
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
