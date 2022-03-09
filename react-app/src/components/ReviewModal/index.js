import './ReviewForm.css';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

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

			{/* <button onClick={() => setShowModal(true)}>{message}</button> */}
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<ReviewForm product={product} userId={userId} setShowModal={setShowModal} reviews={reviews} reviewExists={reviewExists} userReviews={userReviews} />
				</Modal>
			)}
		</>
	);
}


function ReviewDoesNotExist({ setShowModal }) {
	return (
		<div id="purchasesReviewDiv">
			<div id="yourReview">
				<span>Review this item</span>
				<button onClick={() => setShowModal(true)}>Add Review</button>
			</div>
		</div >
	)
}

function ReviewDoesExist({ setShowModal, review }) {
	return (
		<div id="purchasesReviewDiv">
			<div id="yourReview">
				<div>Your Review</div>
				<div>stars</div>
			</div>

			<div id="existingReview">
				<div id="reviewImage">{review.url}</div>
				<div id="reviewContent">{review.content}</div>
				<button onClick={() => setShowModal(true)}>Edit Review</button>
			</div>
		</div>
	)
}





export default ReviewModal;
