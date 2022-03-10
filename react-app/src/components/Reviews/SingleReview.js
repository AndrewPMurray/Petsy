import { useEffect, useLayoutEffect, useRef, useState, forwardRef } from 'react';
import { useHistory } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import dayjs from 'dayjs';

const SingleReview = forwardRef(({ onBackClick, review, seller, products }, ref) => {
	const history = useHistory();
	const [photoPresent, setPhotoPresent] = useState(false);

	const [tooLong, setTooLong] = useState(true);

	const contentRef = useRef();

	// console.log(review.user.username, review.url)
	function isOverflowed(e) {
		return e.scrollHeight - 1 > e.clientHeight;
	}

	// const reviewContentDiv = document.querySelector('.overflow-review')
	// console.log(reviewContentDiv)

	useEffect(() => {
		if (review?.url) setPhotoPresent(true);
	}, [review?.url]);

	useLayoutEffect(() => {
		if (!isOverflowed(contentRef.current)) {
			setTooLong(false);
			return;
		}
	}, []);

	const handleProductChange = (e) => {
		e.preventDefault()
		history.push(`/products/${currentProduct.id}`)
		
	}

	let currentProduct;
	let sellerRevProductImg;

	if (products) {
		currentProduct = products[review.product_id]
		sellerRevProductImg = currentProduct.images[0].url
	}

	return (
		<div ref={ref} className='single-review-container-div'>
			<div className='review-left-side'>
				<div className='review-buyer-header'>
					<i className='fa-solid fa-circle-user'></i>
					<p className='buyer-username'>{review.user.username}</p>
                    <div className='date-review'>
                        {dayjs(review.created_at).format('MMM D, YYYY')}{' '}
                    </div>
				</div>
				<div className='review-star-div'>
					{[...Array(review.rating)].map((ele, idx) => (
						<i className='fas fa-star' key={idx}></i>
					))}
				</div>
				{tooLong ? (
					<div className='review-content-div overflow-div'>
						<p
							ref={contentRef}
							className={`overflow-review review-content-${photoPresent}`}
						>
							{review.content}
						</p>
						<button
							className='review-ellipsis-button'
							onClick={() => setTooLong(false)}
						>
							...
						</button>
					</div>
				) : (
					<p ref={contentRef} className='review-content-text'>
						{review.content}
					</p>
				)}
				{seller &&
					<div className='purchased-item-div'>
						<p>Purchased Item:</p>
						<div className='seller-review-product-info'>
							<img className='tiny-seller-review-photo' src={sellerRevProductImg}></img>
							<ScrollToTop>
							<button onClick={handleProductChange}>{currentProduct.title}</button>
							</ScrollToTop>
						</div>
					</div>
				}
			</div>
			<div className='review-right-side-photo'>
				<img className='review-image' src={review.url} alt='user-review'></img>
			</div>
			<button onClick={onBackClick}>1</button>
		</div>
	);
})

export default SingleReview;
