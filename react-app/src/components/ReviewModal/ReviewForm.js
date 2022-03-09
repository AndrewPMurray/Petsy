import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ReviewForm.css';
import { createReview } from '../../store/reviews';

export default function ReviewForm({ userId, product }) {
	const [content, setContent] = useState(product?.content || '');
	const [rating, setRating] = useState(product?.rating || null);
	// const [url, setUrl] = useState(product?.rating || '');
	const [hover, setHover] = useState(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newReview = {
			content,
			rating,
			user_id: userId,
			url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
			product_id: product.id,
		};

		dispatch(createReview(newReview));
		history.push('/purchases');
	};

	console.log('...', product, userId);
	return (
		<div id='formPage'>
			<div id='formModalHeader'>
				<div>
					<h2>Great! One more thing...</h2>
				</div>

				<div>circles here</div>
			</div>
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
			<div id='reviewForm'>
				<form onSubmit={handleSubmit}>
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
											ratingVal <= (hover || rating) ? 'FFA534' : '#e4e5e9'
										}
									/>
								</label>
							);
						})}
					</div>

					<div id='textarea'>
						<textarea
							name='content'
							type='text'
							value={content}
							onChange={(e) => setContent(e.target.value)}
						></textarea>
					</div>

					<div>
						<button onSubmit={handleSubmit}>submit</button>
						{/* <button onClick={handlePage}>cancel</button> */}
					</div>
				</form>
			</div>
		</div>
	);
}
