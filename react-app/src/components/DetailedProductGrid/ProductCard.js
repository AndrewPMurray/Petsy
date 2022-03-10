import { Link } from 'react-router-dom';

function ProductCard({ product }) {
	const reviews = Object.values(product.reviews);

	const ratings = [];
	if (reviews) {
		for (let i = 0; i < reviews.length; i++) {
			ratings.push(reviews[i].rating);
		}
	}

	const averageRating = ratings.reduce((a, b) => a + b, 0) / reviews.length;

	const stars = [];
	for (let i = 0; i < averageRating; i++) {
		stars.push(i);
	}

	return (
		<div id='productCard'>
			<Link to={`/products/${product.id}`}>
				<div>
					<img className='detailedCard' src={product?.images[0]?.url} alt={product}></img>
				</div>
				<div>
					<span id='productTitle'>{product.title.substring(0, 40)}</span>
				</div>
				<div>
					<span>
						{stars.map((star) => (
							<i className='fas fa-star' key={star}></i>
						))}
					</span>
					<span id='averageRating'>
						{' '}
						{averageRating > 0 ? <> ({reviews.length})</> : ''}
					</span>
				</div>
				<div>${product.price}</div>
				<div>
					<span>{product.user.username}</span>
				</div>
			</Link>
		</div>
	);
}

export default ProductCard;
