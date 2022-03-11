import {
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	forwardRef,
} from "react";
import { useHistory } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import dayjs from "dayjs";

const SingleReview = forwardRef(({ review, seller, products }, ref) => {
	const history = useHistory();

	const [photoPresent, setPhotoPresent] = useState(false);
	const [tooLong, setTooLong] = useState(true);

	const [heightDifference, setHeightDifference] = useState();

	const contentRef = useRef();

	// console.log(review.user.username, review.url)
	function isOverflowed(e) {
		console.log(e, "button clicked", heightDifference)
		const difference = e.scrollHeight - e.clientHeight;
		setHeightDifference(difference)
		console.log("difference", difference)
		return e.scrollHeight - 1 > e.clientHeight
	}

	// const reviewContentDiv = document.querySelector('.overflow-review')
	// console.log(reviewContentDiv)

	useEffect(() => {
		if (review?.url) setPhotoPresent(true);
	}, [review?.url]);

	
	useEffect(() => {
		console.log("wtf")
		if (!isOverflowed(contentRef.current)) {
			setTooLong(false);
		}
	}, [products?.length, heightDifference]);

	const handleExpandContent = (e) => {
		e.preventDefault();
		setTooLong(false);
		console.log("click", contentRef.current.clientHeight, contentRef.current.scrollHeight)
		isOverflowed(contentRef.current)
	}

	const handleProductChange = (e) => {
		e.preventDefault();
		history.push(`/products/${currentProduct.id}`);
	};

	let currentProduct;
	let sellerRevProductImg;

	if (products) {
		currentProduct = products[review.product_id];
		sellerRevProductImg = currentProduct.images[0].url;
	}

	return (
		<div ref={ref} className="single-review-container-div">
			<div className="review-left-side">
				<div className="review-buyer-header">
					<i className="fa-solid fa-circle-user review-buyer-icon"></i>
					<div className="review-name-date-div">
					<p className="buyer-username">{review.user.username}</p>
					<div className="date-review">
						{dayjs(review.created_at).format("MMM D, YYYY")}{" "}
					</div>
					</div>
				</div>
				<div className="review-star-div">
					{[...Array(review.rating)].map((ele, idx) => (
						<i className="fas fa-star review-star" key={idx}></i>
					))}
				</div>
				{tooLong ? (
					<div className="review-content-div overflow-div">
						<p
							ref={contentRef}
							className={`overflow-review content-style review-content-${photoPresent}`}
						>
							{review.content}
						</p>
						<button
							className="review-ellipsis-button"
							onClick={handleExpandContent}
						>
							•••
						</button>
					</div>
				) : (
					<div className="review-content-div">
					<p ref={contentRef} className="content-style review-content-text">
						{review.content}
					</p>
					</div>
				)}
				{seller && (
					<div className="purchased-item-div">
						<p className="purchased">Purchased Item:</p>
						<div className="seller-review-product-info">
							<img
								className="tiny-seller-review-photo"
								src={sellerRevProductImg}
							></img>
							<ScrollToTop>
								<button className="button-to-other-product" onClick={handleProductChange}>
									{currentProduct.title}
								</button>
							</ScrollToTop>
						</div>
					</div>
				)}
			</div>
			<div className="review-right-side-photo">
				<img className="review-image" src={review.url} alt="user-review"></img>
			</div>
			{/* <div className='reviews-page-buttons-div'>
				<button className='reviews-overflow-page-buttons' onClick={onBackClick}>{i}</button>
			</div> */}
		</div>
	);
});

export default SingleReview;
