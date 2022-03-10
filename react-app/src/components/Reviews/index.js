import { useState, useEffect } from 'react';
import './Reviews.css';
import SingleReview from './SingleReview';

function Reviews({ product, products }) {
    const sellerProducts = Object.values(products).filter((p) => p?.user_id === product.user?.id);
    let allReviews = [];
    sellerProducts.forEach((p) => {
        allReviews.push(...p.reviews);
    });

    const [showItemReviews, setShowItemReviews] = useState(!!product.reviews.length)
    const [showSellerReviews, setShowSellerReviews] = useState(!!allReviews.length && !product.reviews.length)

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
    
    

	let content;

	if (product.reviews.length && allReviews.length) {
		content = (
			<div className='reviews-map-div'>
				{showItemReviews &&
                    product.reviews.map((review) => (
					<SingleReview review={review} />
				    ))
                    
                }
				{showSellerReviews &&
				allReviews.map((review) => (
				<SingleReview seller="true" products={products} review={review} />
				))}
			</div>
		);
	}

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
			{(!product.reviews.length && !allReviews.length) ? 
				<div>
					<h3>No reviews yet for this seller</h3>
					<p>Buy this item to leave the first review</p>
				</div>
			 : 
				<div className='reviews-body'>
					<div className='reviews-title-bar'>
						{product.reviews.length && (
							<div className='reviews-item-button'>
								<button onClick={() => {
									setShowItemReviews(true)
									setShowSellerReviews(false)
								}}>Reviews for this item</button>
								<p className='review-total'>{product?.reviews?.length}</p>
							</div>
						)}
						<div className='reviews-seller-button'>
							<button onClick={() => {
								setShowSellerReviews(true)
								setShowItemReviews(false)
							}}>Reviews for this seller</button>
							<p className='review-seller-total'>{allReviews.length}</p>
						</div>
					</div>
				</div>
			}
			<div className='reviews-body-div'>{content}</div>
		</div>
	);
}

export default Reviews;
