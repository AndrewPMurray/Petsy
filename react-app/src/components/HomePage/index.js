import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../store/products';

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
			<div id="colorBlock"></div>
			{user && <h1>Welcome, User</h1>}
			{!user && <h1>Explore one-of-a-kind finds from independent makers</h1>}
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
