import './Purchases.css';
import { loadPurchases } from '../../store/purchases';
import { loadReviewsByUser } from '../../store/reviews';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PurchaseCard from './PurchaseCard';

function Purchases() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session?.user);
	const reviews = useSelector((state) => state?.userReviews);
	const purchases = useSelector((state) => Object.values(state?.purchases));

	useEffect(() => {
		dispatch(loadPurchases(user.id));
		dispatch(loadReviewsByUser(user.id));
	}, [dispatch, user.id]);

	const findReview = (purchaseId, productId) => {
		return Object.values(reviews).filter(review => review.purchase_id === purchaseId && review.product_id === productId)[0]
	}


	return (
		<div id='purchasesPage'>
			{purchases.map((purchase) => (
				<PurchaseCard
					reviews={reviews}
					review={findReview(purchase.id, purchase.product_id)}
					purchase={purchase}
					key={purchase.id}
					purchaseId={purchase.id}
					userId={user.id}
				/>
			))}
		</div>
	);
}

export default Purchases;
