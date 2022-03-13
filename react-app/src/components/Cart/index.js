import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../store/products';
import { makePurchase } from '../../store/cart';
import CartItem from './CartItem';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';
import './Cart.css';

function Cart() {
	const [errors, setErrors] = useState('');
	const user = useSelector((state) => state.session.user);
	const cart = useSelector((state) => state.cart);
	const [cartCount, setCartCount] = useState(0);
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();
	const history = useHistory();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setCartCount(0);
		for (const object in cart) {
			setCartCount((prev) => prev + cart[object].count);
		}
	}, [cart]);

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	const cartItems = Object.values(cart).map((item) => {
		return { ...item, ...products[item.id] };
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setErrors('');
		let cartErrors;

		cartItems?.forEach(async (item, i) => {
			const newPurchase = await dispatch(
				makePurchase({
					user_id: user.id,
					product_id: item.id,
					quantity: item.count,
				})
			);
			if (newPurchase.errors) {
				cartErrors = newPurchase.errors;
				setErrors(() => cartErrors);
				return;
			} else if (!cartErrors && i === cartItems.length - 1) {
				history.push('/purchases');
			}
		});
	};

	const handleClick = (e) => {
		e.preventDefault();
		history.push('/');
	};

	if (!cartItems || !cartItems.length)
		return (
			<>
				<div id='no-cart-page-div'>
					<div id='sub-main-no-cart'>
						<div className='cart-item-header'> Your cart is empty.</div>
						<div>
							<button className='link-cart' onClick={handleClick}>
								Discover something unique for your pet(s) to fill it up
							</button>
						</div>
					</div>
				</div>
			</>
		);

	let total = 0;

	cartItems.map((item) => (total += item.price * item.count));

	return (
		<div id='cart-page'>
			<div id='main-content'>
				<div id='cart-left-side'>
					<div className='amount-cart'>
						{cartCount === 1
							? `You have ${cartCount} item in your cart`
							: `You have ${cartCount} items in your cart`}
					</div>
					{errors.length > 0 && <p id='error'>{errors}</p>}
					<ul>
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item} cart={products[`${item.id}`]} />
						))}
					</ul>
				</div>
				<div id='cart-right-side'>
					<div id='sub-right-div'>
						<div id='checkout'>
							<div>How you'll pay</div>
							<div id='cards'>
								<input type='radio' name='method-buy' />
								<img
									src='https://images.squarespace-cdn.com/content/v1/5cdac02165019ff805c12bd3/1563273051742-QSUPRDFV6OEVTGYIDDHG/visa-mastercard-american-express-discover-logo-12000-25968.png?format=1000w'
									alt='cards'
								/>
							</div>
							<div id='paypal'>
								<input type='radio' name='method-buy' />
								<img
									src='https://2.bp.blogspot.com/-gzW3J2sXFm0/U5h4jgo_1UI/AAAAAAAACqo/E5KtY-0gZfw/s1600/Logo+Paypal.png'
									alt='pay-pal'
								/>
							</div>
							<div id='totals-text'>
								<div id='total-div'>
									Item(s) total: <span>${total.toFixed(2)}</span>
								</div>
								<div id='subtotal-div'>
									Subtotal: <span>${(total * 1.07).toFixed(2)}</span>
								</div>
							</div>
						</div>
						<div>
							{user ? (
								<form id='form-div' onSubmit={onSubmit}>
									<button id='purchase-button' type='submit'>
										Purchase
									</button>
								</form>
							) : (
								<>
									<button id='purchase-button' onClick={() => setShowModal(true)}>
										Purchase
									</button>
									{showModal && (
										<Modal onClose={() => setShowModal(false)}>
											<LoginForm />
										</Modal>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
