import './ProductTypeBubbles.css';
import { Link } from 'react-router-dom';

function ProductTypeBubbles({ productTypes, products }) {
	return (
		<div id='productTypeBubbles'>
			{products.map((product, idx) => (
				<div id='bubble' key={product.id}>
					{idx > 5 ? (
						''
					) : (
						<Link to={`/pets/${product.pet_type_id}/${product.product_type_id}`}>
							<img src={product?.images[0]?.url} alt={product.pet_type.title}></img>
							<span>{productTypes[0].title}</span>
						</Link>
					)}
				</div>
			))}
		</div>
	);
}

export default ProductTypeBubbles;
