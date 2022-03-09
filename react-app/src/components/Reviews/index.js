import { useState, useLayoutEffect } from 'react';
import './Reviews.css';
import SingleReview from './SingleReview';

function Reviews({ product, products }) {
	const sellerProducts = Object.values(products).filter((p) => p?.user_id === product.user?.id);

	const [noItemReviews, setNoItemReviews] = useState(false);
	const [noReviews, setNoReviews] = useState(false);

    const [showItemReviews, setShowItemReviews] = useState(false)
    const [showSellerReviews, setSellerReviews] = useState(false)

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

	let allReviews = [];

	sellerProducts.forEach((p) => {
		allReviews.push(...p.reviews);
	});

	useLayoutEffect(() => {
		if (!product.reviews.length) setNoItemReviews(true);
		if (!product.reviews.length && !allReviews) setNoReviews(true);
	}, []);

	let content;

	if (!noItemReviews) {
		content = (
			<div className='reviews-map-div'>
				{product.reviews.map((review) => (
					<SingleReview review={review} />
				))}
			</div>
		);
	}
	console.log(product.reviews);

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
					<i className='fa-solid fa-medal'></i>
					<p>
						Buyers are raving! Multiple people gave 5-star reviews to this shop in the
						past 7 days.
					</p>
				</div>
			</div>
			{noReviews ? (
				<div>
					<h3>No reviews yet for this seller</h3>
					<p>Buy this item to leave the first review</p>
				</div>
			) : (
				<div className='reviews-body'>
					<div className='reviews-title-bar'>
						{!noItemReviews && (
							<div className='reviews-item-button'>
								<p>Reviews for this item</p>
								<p className='review-total'>{product?.reviews?.length}</p>
							</div>
						)}
						<div className='reviews-seller-button'>
							<p>Reviews for this seller</p>
							<p className='review-seller-total'>{allReviews.length}</p>
						</div>
					</div>
				</div>
			)}
			<div className='reviews-body-div'>{content}</div>
		</div>
	);
}

export default Reviews;
