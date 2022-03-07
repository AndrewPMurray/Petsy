import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/products';
import { loadPetTypes } from '../../store/petTypes';
import './HomePage.css'
import Welcome from './Welcome';
import ProductGrid from "../ProductGrid";
import About from '../About'


export default function HomePage() {
	const products = useSelector((state) => Object.values(state?.products));
	const dogProducts = useSelector(state => Object.values(state?.petTypes))
	const user = useSelector((state) => state.session?.user);
	const dispatch = useDispatch();


	console.log('all', products)
	useEffect(() => {
		dispatch(loadProducts());
		dispatch(loadPetTypes(2))
	}, [dispatch]);

	return (
		<div>
			<Welcome products={products} user={user} />
			<div id="main">
				<ProductGrid products={dogProducts} />
			</div>
			<About />
		</div>
	);
}
