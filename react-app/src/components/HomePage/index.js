import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/products';
import './HomePage.css'
import Welcome from './Welcome';
import ProductsBubble from "../ProductBubbles";
import ProductGrid from "../ProductGrid";



export default function HomePage() {
	const productsObj = useSelector((state) => state?.products);
	const products = Object.values(productsObj);
	const user = useSelector((state) => state.session?.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<div>
			<Welcome products={products} user={user} />
			<div id="main">
				<ProductGrid products={products} />
			</div>


			{/* {products?.map((product) => (
				<div key={product.id}>
					<p>{product.id}</p>
					<p>{product.title}</p>
					<p>
						{product.details[0]}
					</p>
					<p>{product.description}</p>
					<p>{product.user.username}</p>
					<img src={product.images[0].url} alt='pic'></img>
				</div>
			))} */}
		</div>
	);
}
