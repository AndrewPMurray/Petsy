import './ReviewForm.css';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import { FaStar } from 'react-icons/fa';

function ReviewModal({ message, product, userId, reviews, }) {
	const [showModal, setShowModal] = useState(false);


	const userReviews = Object.keys(reviews).map(key => parseInt(key));

	const reviewExists = userReviews.includes(product.id);

	// if the review DOT NOT exist, then show me a form that says "leave a review with stars to select from. ON click, open modal to leave the content portion "

	// if the review exits, show the reviews with an edit button below. THe edit bitton will open modal.

	return (
		<>
			{!reviewExists && <ReviewDoesNotExist setShowModal={setShowModal} />}
			{reviewExists && <ReviewDoesExist setShowModal={setShowModal} review={reviews[product.id]} />}

			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<ReviewForm product={product} userId={userId} setShowModal={setShowModal} reviews={reviews} reviewExists={reviewExists} userReviews={userReviews} />
				</Modal>
			)}
		</>
	);
}


function ReviewDoesNotExist({ setShowModal }) {
	const [hover, setHover] = useState(null);
	const [rating, setRating] = useState(null);


	const handleClick = (e, ratingVal) => {
		setRating(ratingVal)
		setShowModal(true)
	}


	return (
		<>
			<div id="yourReview">
				<div>Review this item</div>
				{/* <button onClick={() => setShowModal(true)}>Add Review</button> */}


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
				<button onClick={() => setShowModal(true)}>Edit Review</button>
			</div>
		</>

	)
}





export default ReviewModal;
