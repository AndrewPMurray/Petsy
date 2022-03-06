import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/products';
import './HomePage.css'
import Welcome from './Welcome';
import ProductGrid from "../ProductGrid";
import About from '../About'


export default function HomePage() {
	const productsObj = useSelector((state) => state?.products);
	const products = Object.values(productsObj);
	const user = useSelector((state) => state.session?.user);
	const dispatch = useDispatch();


	console.log('***', products)


	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<div>
			<Welcome products={products} user={user} />
			<div id="main">
				<ProductGrid products={products} />
			</div>
			<About />
		</div>
	);
}
