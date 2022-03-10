import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { loadReviewsByUser } from '../../store/reviews';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReviewModal from "../ReviewModal";


function PurchaseCard({ purchase, userId }) {
	const reviews = useSelector((state) => state?.userReviews);
	const dispatch = useDispatch();
	let message = reviews[purchase.product_id] ? 'Edit Review' : 'Add Review'


	useEffect(() => {
		dispatch(loadReviewsByUser(userId));
	}, [dispatch, userId]);


	return (
		<div id='purchaseCard'>
			<div id='purchasedBy'>
				<div>
					Purchased from {purchase.product.user.username} on{' '}
					{dayjs(purchase.purchase_date).format('MMM DD, YYYY')}{' '}
				</div>
				<div>${(purchase.product.price * 1.07 + 7.99).toFixed(2)}</div>
			</div>
			<div id='purchasedItem'>
				<div id='purchaseItemImageDiv'>
					<img
						src={purchase.product.images[0].url}
						id='purchasedImg'
						alt={purchase.product.title}
					></img>
				</div>
				<div id='purchasedItemInfo'>
					<Link to={`/products/${purchase.product_id}`} target="_blank">{purchase.product.title}</Link>
				</div>
			</div>
			<div id='purchaseReview'>
				<div>
					<ReviewModal message={message} userId={userId} product={purchase.product} reviews={reviews} />
				</div>
			</div>
			<div id='buyAgainDiv'>
				<div>
					{' '}
					<button id='buyAgainButton'>Buy this again</button>
				</div>
				<div>
					{' '}
					<p>${(purchase.product.price * 1.07).toFixed(2)}</p>{' '}
				</div>
			</div>
		</div>
	);
}

export default PurchaseCard;
