import ProductCard from './ProductCard';


export default function ListingsGrid({ products, setShowForm, setActiveProductId }) {
	return (
		<div id="listingGrid">
			{products.map((product, idx) =>
				<ProductCard
					product={product}
					setShowForm={setShowForm}
					setActiveProductId={setActiveProductId}
					key={product.id} />
			)}
		</div>
	)
}
