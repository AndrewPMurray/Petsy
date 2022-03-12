import { useState, useRef, useEffect } from 'react';
import './Reviews.css';
import SingleReview from './SingleReview';

function Reviews({ product, products }) {
	const reviewsRef = useRef([])
	const reviewsSellerRef = useRef([])
	const reviewsDivRef = useRef(0)
	const [heightDifference, setHeightDifference] = useState(0);
	const [pageNum, setPageNum] = useState(0)


	const [divHeight, setDivHeight] = useState()
	const sellerProducts = Object.values(products).filter((p) => p?.user_id === product.user?.id).reverse();
               
	// console.log(heightDifference, divHeight)

	let allReviews = [];

	sellerProducts.forEach((p) => {
		if (p.reviews) {
			allReviews.push(...p.reviews);
		} else allReviews.push(p)
	});

	let roundedSellerProductReviews;

	let roundedProductReviews = [...product?.reviews].reverse()

	if (allReviews) {
		roundedSellerProductReviews = [...allReviews];
	}
	console.log(roundedProductReviews)

	while (roundedProductReviews.length % 4 !== 0) {
		roundedProductReviews.push({})
	}

	while (roundedSellerProductReviews.length % 4 !== 0) {
		roundedSellerProductReviews.push({})
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

	// Number of "Pages" for reviews div -- four reviews per "page"
	let pageNumsItems = [];
	let everyFourItems = [];
	let heightItemsArr = [];


	let pageNumsSeller = [];
	let everyFourSellerItems = [];
	let heightSellerItemsArr = [];

	function getPageHeightPer4Reviews(reviewElements) {
		return reviewElements?.reduce((prev, curr, ele, i) => {
			// console.log(i, curr.scrollHeight)
			if (curr) {
				return prev + curr.scrollHeight
			}
		}, 0)
	}

	for (let i = 0; i < roundedProductReviews.length; i += 4) {
		pageNumsItems.push(i)
	}
	console.log("pageNumsItems:", pageNumsItems)

	for (let i = 0; i < roundedSellerProductReviews.length; i += 4) {
		pageNumsSeller.push(i);
	}

	useEffect(() => {
		if (showItemReviews) {
			for (let i = 0; i < roundedProductReviews.length; i += 4) {
				everyFourItems?.push(reviewsRef?.current.slice(i, i + 4))
				// console.log("everyItem", everyFourItems)
			}


			everyFourItems?.forEach((range) => {
				heightItemsArr?.push(getPageHeightPer4Reviews(range))
			})

			if (!divHeight) setDivHeight(heightItemsArr[0])
		}
	}, [showItemReviews, everyFourItems, products.length, heightDifference])

	useEffect(() => {
		if (showSellerReviews) {
			for (let i = 0; i < roundedSellerProductReviews?.length; i += 4) {
				everyFourSellerItems?.push(reviewsSellerRef?.current.slice(i, i + 4));
			}
			everyFourSellerItems?.forEach((range) => {
				heightSellerItemsArr.push(getPageHeightPer4Reviews(range));
			});
			if (!divHeight) setDivHeight(heightSellerItemsArr[0]);
		}
	}, [showSellerReviews, everyFourSellerItems, heightDifference]);

	// useEffect(() => {}, [divHeight]);

	// Handling Page turn button clicks:
	function handleBackClick(iOfReview) {
		reviewsRef.current[iOfReview].scrollIntoView({ block: 'start', inline: 'nearest' });
		setPageNum()
		setDivHeight(0);
	}

	function handleSellerBackClick(i) {
		reviewsSellerRef.current[i].scrollIntoView({ block: 'start', inline: 'nearest' });
		setDivHeight(0);
	}

	let content;


	content = (
		<>
			<div ref={reviewsDivRef} className='reviews-map-div' style={{ height: `${divHeight}px` }} >
				{product.reviews.length > 0 && showItemReviews &&
					<>
						{roundedProductReviews.map((review, i) => (
							<SingleReview ref={el => reviewsRef.current[i] = el} i={i} heightDifference={heightDifference} setHeightDifference={setHeightDifference} review={review} />
						))}
					</>
				}
				{allReviews.length && showSellerReviews &&
					<>
						{roundedSellerProductReviews.map((review, i) => (
							<SingleReview ref={el => reviewsSellerRef.current[i] = el} i={i} heightDifference={heightDifference} setHeightDifference={setHeightDifference} seller="true" products={products} review={review} />
						))}
					</>
				}
			</div>
			<div className='reviews-page-buttons-div'>
				{showItemReviews && (
					<>
						{pageNumsItems.map((ele, i) => (
							<button
								className='reviews-overflow-page-buttons'
								onClick={() => handleBackClick(ele, i)}
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
								className='reviews-overflow-page-buttons'
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
										setDivHeight(0)
										// handleBackClick(0)
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
										setDivHeight(0);
										// handleSellerBackClick(0)
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
