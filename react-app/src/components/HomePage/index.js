import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/products';

export default function HomePage() {
	const productsObj = useSelector((state) => state?.products);
	const products = Object.values(productsObj);
	const dispatch = useDispatch();
	console.log(products[0]);

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<div>
			<h1>Welcome, User</h1>
			{products?.map((product) => (
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
			))}
		</div>
	);
}
