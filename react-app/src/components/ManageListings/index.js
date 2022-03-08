import DetailedProductGrid from '../DetailedProductGrid';
import ListingForm from '../ListingForm';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts } from '../../store/products';
import './ManageListings.css';

export default function ManageListings() {
	const [showForm, setShowForm] = useState(false);
	const products = useSelector((state) => state.products);
	const [activeProductId, setActiveProductId] = useState(null);
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
	const userProducts = Object.values(products).filter((product) => product?.user_id === user?.id);

	useEffect(() => {
		document.querySelector('nav').style.visibility = 'hidden';
		return () => (document.querySelector('nav').style.visibility = 'visible');
	}, []);

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return showForm ? (
		<ListingForm
			userId={user.id}
			setShowForm={setShowForm}
			product={products[activeProductId]}
		/>
	) : (
		<div id='manage-listings-page'>
			<div id='top-header'>
				<h2>Shop Manager</h2>
				<button
					onClick={() => {
						setActiveProductId(null);
						setShowForm(true);
					}}
					id='add-listing-button'
				>
					Add Listing
				</button>
			</div>
			<DetailedProductGrid products={userProducts} />
		</div>
	);
}
