import {
	useEffect,
	useRef,
	useState,
	forwardRef,
} from "react";
import { useHistory } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import dayjs from "dayjs";

const SingleReview = forwardRef(({ review, seller, products}, ref) => {
	const history = useHistory();

	const [photoPresent, setPhotoPresent] = useState(false);
	const [tooLong, setTooLong] = useState(true);

	const contentRef = useRef();
	
	console.log(review.content, contentRef.current?.scrollHeight, contentRef.current?.clientHeight)
	function isOverflowed(e) {
		return e?.scrollHeight - 1 > e?.clientHeight
	}
	
	useEffect(() => {
		if (review?.url) setPhotoPresent(true);
	}, [review?.url]);
	
	
	useEffect(() => {
		if (review.content && !isOverflowed(contentRef.current)) {
			setTooLong(false);
		}
	}, [products?.length]);
	
	const handleExpandContent = (e) => {
		e.preventDefault();
		setTooLong(false);
	}

	const handleProductChange = (e) => {
		e.preventDefault();
		history.push(`/products/${currentProduct.id}`);
	};

	let currentProduct;
	let sellerRevProductImg;

	if (products) {
		currentProduct = products[review.product_id];
		sellerRevProductImg = currentProduct?.images[0].url;
	}

	const reviewLength = Object.keys(review).length

	return (
		reviewLength === 0 ?
			<div ref={ref} className="single-review-container-div">
			</div>
		:
		<div ref={ref} className="single-review-container-div">
		<div className={`review-left-side-${photoPresent}`}>
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
									{currentProduct?.title}
								</button>
								</ScrollToTop>
								</div>
								</div>
								)}
								</div>
								<div className="review-right-side-photo">
								{photoPresent &&
								<img className="review-image" src={review.url} alt="user-review"></img>
								}
								</div>
								{/* <div className='reviews-page-buttons-div'>
								<button className='reviews-overflow-page-buttons' onClick={onBackClick}>{i}</button>
			</div> */}
			</div>
	);
});

export default SingleReview;
