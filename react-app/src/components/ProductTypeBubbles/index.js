import './ProductTypeBubbles.css';
import { Link } from 'react-router-dom';

function ProductTypeBubbles({ product, productType }) {
	console.log(product);
	return (
		<div id='productTypeBubbles'>
			<div id='bubble' key={product?.id}>
				<Link to={`/pets/${product?.pet_type_id}/${product?.product_type_id}`}>
					<img src={product?.images[0]?.url} alt={product?.pet_type.title}></img>
					<span>{productType?.title}</span>
				</Link>
			</div>
		</div>
	);
}

export default ProductTypeBubbles;
