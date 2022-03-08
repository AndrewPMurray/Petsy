import ListingsGrid from './ListingsGrid';
import ListingForm from '../ListingForm';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
		document.querySelector('nav').style.display = 'none';
		document.querySelector('footer').style.display = 'none';
		return () => {
			document.querySelector('nav').style.display = 'flex'

			document.querySelector('footer').style.display = 'flex'
		};
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
				<div id="leftHeader">
					<span><Link to='/'><i class="fa-solid fa-arrow-left"></i> Back to Petsy</Link></span>
					<h2>Shop Manager</h2>
				</div>

				<button
					onClick={() => {
						setActiveProductId(null);
						setShowForm(true);
					}}
					id='add-listing-button'
				>
					<i class="fa-solid fa-plus"></i>
					Add Listing
				</button>
			</div>
			<ListingsGrid
				products={userProducts}
				setShowForm={setShowForm}
				setActiveProductId={setActiveProductId}
			/>
		</div>
	);
}
