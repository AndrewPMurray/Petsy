import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../store/products';
import CartItem from './CartItem';

function Cart() {
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

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
		return <div className='cart'>No items in the cart. Start selecting items to purchase.</div>;

	console.log('CART', cartItems);

	const onSubmit = (e) => {
		e.preventDefault();
		window.alert(
			'Purchased the following:\n' +
				`${cartItems.map((item) => `${item.count} of ${item.title}`).join('\n')}`
		);
	};

	return (
		<div className='cart'>
			<ul>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
			<hr />
			<form onSubmit={onSubmit}>
				<button type='submit'>Purchase</button>
			</form>
		</div>
	);
}

export default Cart;
