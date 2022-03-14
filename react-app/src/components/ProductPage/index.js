import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { loadProducts } from '../../store/products';
import ProductPhotos from './ProductPhotos';
import ProductInfo from './ProductInfo';
import Reviews from '../Reviews/index';
import './ProductPage.css';

function ProductPage() {
	const dispatch = useDispatch();
	const { productId } = useParams();
	const products = useSelector((state) => state?.products);
	const history = useHistory();

	let product;
	let firstImage;

	if (products) {
		product = products[productId];
		firstImage = product?.images[0].id;
	}

	useEffect(() => {
		dispatch(loadProducts()).then((res) => {
			let productExists = false;
			res.forEach((product) => {
				if (product.id === +productId) productExists = true;
			});
			if (!productExists) history.push('/not-found');
		});
	}, [dispatch, history, productId]);

	return (
		<>
			{product && (
				<div className='product-div'>
					<div className='product-left-col'>
						<ProductPhotos firstImage={firstImage} product={product} />
						<Reviews product={product} products={products} />
					</div>
					<div className='product-right-col'>
						<ProductInfo product={product} />
					</div>
				</div>
			)}
		</>
	);
}

export default ProductPage;
