import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { remove, updateCount } from '../../store/cart';
import './Cart.css';

function CartItem({ item, cart }) {
	const dispatch = useDispatch();
	const [count, setCount] = useState(item.count);

	useEffect(() => {
		setCount(item.count);
	}, [item.count]);

	console.log('CART', cart);

	return (
		<li className='cart-item'>
			<div id="cart-item-user">
				<i className="fa-solid fa-circle-user"></i>
				{item?.user?.username}
			</div>
			<div id="item-content">
				<div id="cart-item-image"><img src={cart?.images[0]?.url} alt="item-image" /></div>
				<div id='cart-item-title'>{item?.title}</div>
				<div id='cart-item-count'>
					<div className='cart-item-menu'>
						<button
							onClick={() => dispatch(updateCount(item.id, item.count - 1))}
							className='cart-item-button'
						>
							-
						</button>
						<div>{count}</div>
						{/* <input
							className='amount-item-input'
							type='number'
							value={count}
							onChange={(e) => setCount(e.target.value)}
							onBlur={() => dispatch(updateCount(item.id, +count))}
						/> */}
						<button
							onClick={() => dispatch(updateCount(item.id, item.count + 1))}
							className='cart-item-button'
						>
							+
						</button>
						{/* <button onClick={() => dispatch(remove(item.id))}
							className='cart-item-button'>
							X
						</button> */}
					</div>
				</div>
				<div id="cart-item-price">${item?.price?.toFixed(2)}</div>
			</div>

		</li>
	);
}

export default CartItem;
