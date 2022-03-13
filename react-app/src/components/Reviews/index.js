import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Reviews.css';
import SingleReview from './SingleReview';

function Reviews({ product, products }) {
	const reviewsDivRef = useRef(0)
	const user = useSelector(state => state.session.user);

	const [pageNum, setPageNum] = useState(1)
	
	const sellerProducts = Object.values(products).filter((p) => p?.user_id === product.user?.id);

	
	let allReviews = [];
	
	sellerProducts.forEach((p) => {
		if (p.reviews) {
			allReviews.push(...p.reviews);
		} else allReviews.push(p)
	});

	let roundedSellerProductReviews;
	let roundedProductReviews = [...product?.reviews].reverse();

	// Put Current User's Review on top
	[...roundedProductReviews].forEach((review, i) => {
		if (user && user.id === review.user_id) {
			roundedProductReviews.splice(i, 1)
			roundedProductReviews.unshift(review)
		}
	})

	if (allReviews) {
		roundedSellerProductReviews = [...allReviews].reverse();
	}

	while (roundedProductReviews.length % 4 !== 0) {
		roundedProductReviews.push({})
	}
	while (roundedSellerProductReviews.length % 4 !== 0) {
		roundedSellerProductReviews.push({})
	}
	

	// --------------------------------new-----------------------------------------//
	let arrOfFourReviewsArrs = [];
	let arrOfFourSellerReviewsArrs = [];
	let pageNumsItems = [];
	let pageNumsSeller = [];

	for (let i = 0; i < roundedProductReviews.length; i += 4) {
		arrOfFourReviewsArrs.push(roundedProductReviews.slice(i, i + 4))
		pageNumsItems.push(i)
	}

	for (let i = 0; i < roundedSellerProductReviews.length; i += 4) {
		arrOfFourSellerReviewsArrs.push(roundedSellerProductReviews.slice(i, i + 4))
		pageNumsSeller.push(i);
	}

	const [showItemReviews, setShowItemReviews] = useState(!!product.reviews.length);
	const [showSellerReviews, setShowSellerReviews] = useState(
		!!allReviews.length && !product.reviews.length
		);
		
		// Yanelys' Avg Rating!
		const reviews = Object.values(product?.reviews);
		const ratings = [];
		if (reviews) {
			for (let i = 0; i < reviews.length; i++) {
				ratings.push(reviews[i].rating);
			}
		}
		const averageRating = ratings.reduce((a, b) => a + b, 0) / reviews.length;
		const stars = [];
		for (let i = 0; i < averageRating; i++) {
			stars.push(i);
		}


	// Handling Page turn button clicks:
	function handleBackClick(ele, i) {
		// reviewsRef.current[ele].scrollIntoView({ block: 'start', inline: 'nearest' });
		setPageNum(i + 1)
	}
	
	function handleSellerBackClick(ele, i) {
		// reviewsSellerRef.current[ele].scrollIntoView({ block: 'start', inline: 'nearest' });
		setPageNum(i + 1)
	}

	let content;

	content = (
		<>
			<div ref={reviewsDivRef} className='reviews-map-div' >
				{product.reviews.length > 0 && showItemReviews &&
					<>
						{arrOfFourReviewsArrs.map((arr, i) => (
							<div className={"single-review-page " + (pageNum === i+1 ? "show-page-true" : "show-page-false")}>
							{arr.map((review) => (
								<SingleReview review={review} />
							))}
							</div>
						))
						}
					</>
				}
				{allReviews.length && showSellerReviews &&
					<>
						{roundedSellerProductReviews.map((review, i) => (
							<SingleReview seller="true" products={products} review={review} />
						))}
					</>
				}
			</div>
			<div className='reviews-page-buttons-div'>
				{showItemReviews && (
					<>
						{pageNumsItems.map((ele, i) => (
							<button
								className={"reviews-overflow-page-buttons " + (pageNum === i+1 ? "page-button-true" : "page-button-false")}
								onClick={(e) => {
									handleBackClick(ele, i)
								}}
							>
								{i + 1}
							</button>
						))}
					</>
				)}
				{showSellerReviews && (
					<>

						{pageNumsSeller.map((ele, i) => (
							<button
								className={"reviews-overflow-page-buttons " + (pageNum === i+1 ? "page-button-true" : "page-button-false")}
								onClick={() => handleSellerBackClick(ele, i)}
							>
								{i + 1}
							</button>
						))}
					</>
				)}
			</div>
		</>
	);

	return (
		<div className='reviews-container-div'>
			<div className='reviews-header'>
				<div className='total-avg-reviews-div'>
					<h2>{reviews.length} reviews</h2>
					<span>
						{stars.map((star) => (
							<i className='fas fa-star' key={star}></i>
						))}
					</span>
				</div>
				<div className='review-raving'>
					<i className='fa-solid fa-medal raving-icon'></i>
					<p className='review-raving-text'>
						Buyers are raving! Multiple people gave 5-star reviews to this shop in the
						past 7 days.
					</p>
				</div>
			</div>
			{(product.reviews.length <= 0 && allReviews.length <= 0) ?
				<div>
					<h3>No reviews yet for this seller</h3>
					<p>Buy this item to leave the first review!</p>
				</div>
				:
				<>
					<div className='reviews-body'>
						<div className='reviews-title-bar'>
							{product.reviews.length > 0 && (
								<div className={`reviews-item-button show-reviews-title-${showItemReviews}`}>
									<button className='show-buttons' onClick={() => {
										setShowItemReviews(true)
										setShowSellerReviews(false)
										setPageNum(1)
									}}>Reviews for this item</button>
									<p className='review-total'>{product?.reviews?.length}</p>
								</div>
							)}
							<div
								className={`reviews-seller-button show-reviews-title-${showSellerReviews}`}
								>
								<button
									className='show-buttons'
									onClick={() => {
										setShowSellerReviews(true);
										setShowItemReviews(false);
										setPageNum(1)
									}}
								>
									Reviews for this seller
								</button>
								<p className='review-seller-total'>{allReviews.length}</p>
							</div>
						</div>
					</div>
					<div className='reviews-body-div'>{content}</div>
				</>
			}
		</div>
	);
}

export default Reviews;
