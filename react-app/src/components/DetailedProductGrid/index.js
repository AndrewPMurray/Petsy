import './DetailedProductGrid.css';
import ProductCard from './ProductCard';

function DetailedProductGrid({ products }) {
	return (
		<div id='detailedProductGrid'>
			{products.map(
				(product, idx) =>
					!Array.isArray(product) && <ProductCard product={product} key={product.id} />
			)}
		</div>
	);
}

export default DetailedProductGrid;
