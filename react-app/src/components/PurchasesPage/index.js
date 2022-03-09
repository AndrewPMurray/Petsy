import './Purchases.css';
import { loadReviewsByUser } from '../../store/reviews';
import { loadPurchases } from '../../store/purchases';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PurchaseCard from './PurchaseCard';

function Purchases() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session?.user);
	const purchases = useSelector((state) => Object.values(state?.purchases));
	const reviews = useSelector((state) => state?.userReviews);

	useEffect(() => {
		dispatch(loadPurchases(user.id));
		dispatch(loadReviewsByUser(user.id));
	}, [dispatch, user.id]);

	return (
		<div id='purchasesPage'>
			{purchases.map((purchase) => (
				<PurchaseCard
					purchase={purchase}
					reviews={reviews}
					key={purchase.id}
					userId={user.id}
				/>
			))}
		</div>
	);
}

export default Purchases;
