import './ReviewForm.css';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import { FaStar } from 'react-icons/fa';

function ReviewModal({ message, product, userId, reviews, }) {
	const [showModal, setShowModal] = useState(false);
	const [stars, setStars] = useState(0)

	const userReviews = Object.keys(reviews).map(key => parseInt(key));

	const reviewExists = userReviews.includes(product.id);

	console.log('modal on?', showModal);

	const handleClose = () => {
		setShowModal(false)
	};

	return (
		<>
			{!reviewExists && <ReviewDoesNotExist setStars={setStars} setShowModal={setShowModal} />}
			{reviewExists && <ReviewDoesExist setShowModal={setShowModal} review={reviews[product.id]} />}


			{showModal && (
				// <Modal onClose={() => setShowModal(false)}>
				<Modal onClose={handleClose}>
					<ReviewForm product={product} userId={userId} setShowModal={setShowModal} reviews={reviews} reviewExists={reviewExists} userReviews={userReviews} stars={stars} />
				</Modal>
			)}
		</>
	);
}


function ReviewDoesNotExist({ setShowModal, setStars }) {
	const [hover, setHover] = useState(null);
	const [rating, setRating] = useState(null);


	const handleClick = (e, ratingVal) => {
		setRating(ratingVal)
		setStars(ratingVal)
		setShowModal(true)
	}


	return (
		<>
			<div id="yourReview">
				<div>Review this item</div>

				<div id='starRating'>
					{[...Array(5)].map((star, idx) => {
						const ratingVal = idx + 1;
						return (
							<label key={idx}>
								<input
									type='radio'
									name='rating'
									value={ratingVal}
									placeholder='Tell us about your experience'
									onClick={(e) => handleClick(e, ratingVal)}
								/>
								<FaStar
									className='ratingStars'
									size={20}
									onMouseEnter={() => setHover(ratingVal)}
									onMouseLeave={() => setHover(null)}
									color={
										ratingVal <= (hover || rating) ? 'FFA534' : '#e4e5e9'
									}
								/>
							</label>
						);
					})}
				</div>
			</div>
		</>
	)
}

function ReviewDoesExist({ setShowModal, review }) {

	const stars = [];
	for (let i = 0; i < review.rating; i++) {
		stars.push(i)
	};

	return (
		<>
			<div id="yourReview">
				<div>Your Review</div>
				<div> {stars.map((star) => (
					<i className="fas fa-star" key={star}></i>
				))}</div>
			</div>

			<div id="existingReview">
				{/* <div id="reviewImage">{review.url}</div> */}
				<div id="reviewContent">{review.content}</div>
			</div>
			<div id="reviewButtonDiv">
				<button onClick={() => setShowModal(true)} id="editReviewButton">Edit Review</button>
			</div>
		</>

	)
}





export default ReviewModal;
