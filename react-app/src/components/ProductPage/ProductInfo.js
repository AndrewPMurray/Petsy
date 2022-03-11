import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highlight from './Highlight';
import { addToCart, updateCount } from '../../store/cart';
import './Description.css';
import { useHistory } from 'react-router-dom';

function ProductInfo({ product }) {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const cartItem = useSelector((state) => state.cart[product.id]);
	const [hiddenHighlights, setHiddenHighlights] = useState(false);
	const [hiddenDes, setHiddenDes] = useState(false);
	const [hiddenSeller, setHiddenSeller] = useState(false);
	const [showDesp, setShowDesp] = useState(false);
	const [randomNum, setRandomNum] = useState(1);

	const history = useHistory();
	
	useEffect(() => {
		const min = 3;
		const max = 25;
		const rand = min + Math.random() * (max - min);
		setRandomNum(Math.floor(rand));
	}, []);

	const handleHiddenHighlights = (e) => {
		e.preventDefault();
		setHiddenHighlights(!hiddenHighlights);
	};

	const handleHiddenDes = (e) => {
		e.preventDefault();
		setHiddenDes(!hiddenDes);
	};

	const handleHiddenSeller = (e) => {
		e.preventDefault();
		setHiddenSeller(!hiddenSeller);
	};

	const cartAdd = async (e) => {
		if (cartItem) await dispatch(updateCount(product.id, cartItem.count + 1));
		else await dispatch(addToCart(product.id));
		history.push('/cart');
	};

	return (
		<>
			<div className='info-title-price'>
				<h2>{product.title}</h2>
				<h3>${product.price.toFixed(2)}+</h3>
			</div>
			<div className='info-button-quantity'>
				<button className='add-cart-button' onClick={cartAdd}>Add to cart</button>
				<div className='info-icons'>
					<div className='one-line'>
						<i id='info-icon1' className='fa-solid fa-hourglass info-icon1'></i>
						<p>
							Selling fast! Only {product.quantity} left, {randomNum} people have it
							in their carts.
						</p>
					</div>
					<div className='one-line'>
						<i id='info-icon2' className='fa-solid fa-square-check info-icon2'></i>
						<p>
							Star Seller. This seller has a history of 5-star reviews and shipping on
							time.
						</p>
					</div>
					<div className='one-line'>
						<i id='info-icon3' className='fa-solid fa-truck-fast'></i>
						<p>Hooray! This item ships free to the US.</p>
					</div>
				</div>
			</div>
			{/* //  main button (Highlights/Description) changes display: hidden
                // two CSS class names <button>...</button>
                //     1. overflow: hidden, text-overflow: ellipsis !important
                //      2. regular css, not hidden */}
			<div className='info-details-description-div'>
				<div className='info-highlights'>
					<div className='close-button-div' onClick={handleHiddenHighlights}>
						<p>Highlights</p>
						<i className='fa-solid fa-angle-up'></i>
					</div>
					{!hiddenHighlights &&
						product.details.map((highlight) => (
							<Highlight key={highlight} string={highlight} />
						))}
				</div>
				<div className='info-description'>
					<div className='close-button-div' onClick={handleHiddenDes}>
						<p>Description</p>
						<i className='fa-solid fa-angle-up'></i>
					</div>
					{!hiddenDes && (
						<>
							{showDesp ? (
								<div className='description-div'>
									<pre className='description-text'>{product.description}</pre>
								</div>
							) : (
								<>
									<div className='description-overflow'>
										<pre className='description-text'>
											{product.description}
										</pre>
									</div>
									<button className='learn-more' onClick={() => setShowDesp(true)}>
										Learn more about this item
									</button>
								</>
							)}
						</>
					)}
					<div className='seller-info-div'>
						<div className='close-button-div' onClick={handleHiddenSeller}>
							<p>Meet your sellers</p>
							<i className='fa-solid fa-angle-up'></i>
						</div>
						{!hiddenSeller && (
							<div className='seller-icon-name-div'>
								<i className='fa-solid fa-circle-user'></i>
								<h2 className='seller-username'>{product.user.username}</h2>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductInfo;
