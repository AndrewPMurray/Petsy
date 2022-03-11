import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../store/products';
import { reset } from '../../store/cart';
import CartItem from './CartItem';
// import { test } from '../LoginFormModal';
import './Cart.css'

function Cart() {
	const user = useSelector((state) => state.session.user)
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	const cartItems = Object.values(cart).map((item) => {
		return { ...item, ...products[item.id] };
	});

	if (!cartItems || !cartItems.length)
		return <div className='cart-item-header'>No items in the cart. Start selecting items to purchase.</div>;


	const onSubmit = (e) => {
		e.preventDefault();
		if (!user) {
			test()
		}
		cartItems?.forEach(item => {
			fetch('/api/purchases/', {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					user_id: user.id,
					product_id: item.id,
					quantity: item.count
				})
			})
		})
		dispatch(reset());
		history.push('/purchases');
	};

	return (
		<div className='cart'>
			<ul>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
			<hr />
			{/* TODO prompt user to login/signup if not already */}
			<form onSubmit={onSubmit}>
				<button type='submit'>Purchase</button>
			</form>
		</div>
	);
}

export default Cart;
