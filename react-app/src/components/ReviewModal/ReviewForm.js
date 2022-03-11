import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import './ReviewForm.css';
import { createReview, editReview, loadReviewsByUser } from '../../store/reviews';
import UploadReviewImage from './UploadReviewImage';

export default function ReviewForm({
	userId,
	product,
	reviews,
	setShowModal,
	reviewExists,
	stars,
	review,
	purchaseId,
}) {
	const [content, setContent] = useState(review?.content || '');
	const [rating, setRating] = useState(review?.rating || null);
	const [url, setUrl] = useState({ url: review?.url, exists: true } || '');
	const [imageToDelete, setImageToDelete] = useState('');
	const [hover, setHover] = useState(null);
	const dispatch = useDispatch();
	const [active, setActive] = useState(1);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newReview = {
			content,
			rating: stars,
			user_id: userId,
			url: url?.url || url,
			product_id: product.id,
			purchase_id: purchaseId,
		};

		dispatch(createReview(newReview));
		setShowModal(false);
	};

	const handleEdit = async (e) => {
		e.preventDefault();

		// let reviewId;
		// if (reviewExists) {
		// 	reviewId = reviews[product.id].id
		// }

		const editedReview = {
			content,
			rating,
			user_id: userId,
			url: url.url || url,
			product_id: product.id,
			purchase_id: purchaseId,
		};

		if (imageToDelete) {
			const formData = new FormData();
			formData.append('url', imageToDelete);

			const res = await fetch(`/api/images/`, {
				method: 'DELETE',
				body: formData,
			});
			if (res.ok) {
				await res.json();
			} else {
				const errors = res.json();
				console.log('ERROR', errors);
			}
		}

		await dispatch(editReview(editedReview, review?.id));
		await dispatch(loadReviewsByUser(userId));

		setShowModal(false);
	};

	const isActive = (num) => {
		if (num === 1) {
			return active === 1 || active === 2 || active == 3;
		}
		if (num === 2) {
			return active == 2 || active === 3;
		}
		if (num === 3) {
			return active == 3;
		}
	};

	const handlePage = (e) => {
		e.preventDefault();
		setActive((count) => count + 1);
	};

	return (
		<div id='formPage'>
			<div id='formModalHeader'>
				<div>
					{active === 1 ? (
						<h2>Great! One more thing...</h2>
					) : (
						<h2>Extra Credit: add a photo!</h2>
					)}
				</div>

				<div>
					<div id='circles'>
						<div id='circle-1'>
							{isActive(1) ? <AiOutlineCheckCircle /> : <AiTwotoneCheckCircle />}
						</div>
						<div id='circle-2'>
							{isActive(2) ? <AiOutlineCheckCircle /> : <AiTwotoneCheckCircle />}
						</div>

						<div id='circle-3'>
							{isActive(3) ? <AiOutlineCheckCircle /> : <AiTwotoneCheckCircle />}
						</div>
					</div>
				</div>
			</div>
			{/* only show on active === 1 */}
			{active === 1 && (
				<div id='reviewRecs'>
					<span>
						<h4>Helpful Reviews on Petsy mention:</h4>
						<ul>
							<li>the quality of the item</li>
							<li>if the item of the matched description</li>
							<li>if the item met your expectations</li>
						</ul>
					</span>
				</div>
			)}
			<div id='reviewForm'>
				<form onSubmit={reviewExists ? handleEdit : handleSubmit}>
					{/* only show on active === 1 */}
					{reviewExists && active === 1 && (
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
											onClick={() => setRating(ratingVal)}
										/>
										<FaStar
											className='ratingStars'
											size={40}
											onMouseEnter={() => setHover(ratingVal)}
											onMouseLeave={() => setHover(null)}
											color={
												ratingVal <= (hover || rating)
													? 'FFA534'
													: '#e4e5e9'
											}
										/>
									</label>
								);
							})}
						</div>
					)}
					{active === 1 && (
						<div id='textarea'>
							<textarea
								name='content'
								type='text'
								value={content}
								onChange={(e) => setContent(e.target.value)}
							></textarea>
						</div>
					)}

					{active === 2 && (
						<div id='reviewImageDiv'>
							<UploadReviewImage
								review={review}
								setUrl={setUrl}
								setImageToDelete={setImageToDelete}
								url={url}
							/>
						</div>
					)}
					<div id='form_button_div'>
						{active === 2 ? (
							<button id='reviews_submitButton'>submit</button>
						) : (
							<button id='reviews_submitButton' onClick={handlePage}>
								next
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
