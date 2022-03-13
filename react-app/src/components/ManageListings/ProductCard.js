import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/products';

function ProductCard({ product, setShowForm, setActiveProductId }) {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteProduct(product));
	};

	return (
		<div id='manageProdCard'>
			<div
				id='clickFormArea'
				onClick={() => {
					setActiveProductId(product.id);
					setShowForm(true);
				}}
			>
				<div id='manageImageDiv'>
					{product.images.length ? (
						<img id='manageProdImg' src={product?.images[0]?.url} alt={product}></img>
					) : (
						<img
							id='manageProdImg'
							src={
								'https://awards.hospitalitydesign.com/wp-content/uploads/2021/03/SM-placeholder-1024x512-1.png'
							}
							alt={product}
						></img>
					)}
				</div>
				<div id='manageProdTitle'>
					{product.title.length > 20 ? (
						<h4>{product.title.substring(0, 20)}...</h4>
					) : (
						<h4>{product.title}</h4>
					)}
				</div>
				<div id='manageProdPrice'>
					<p>${product.price.toFixed(2)} </p>
				</div>
			</div>
			<div id='trashDiv' onClick={handleDelete}>
				<i className='fa-solid fa-trash-can'></i>
			</div>
		</div>
	);
}

export default ProductCard;
