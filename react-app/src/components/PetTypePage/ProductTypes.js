// import ProductsBubble from "../ProductBubbles"
import ProductTypeBubbles from '../ProductTypeBubbles';

function ProductTypes({ productTypes, products, petType }) {
	const firstProductsByType = [];

	productTypes.forEach((productType) => {
		for (let i = 0; i < products.length; i++) {
			if (productType.id === products[i]?.product_type.id)
				return firstProductsByType.push(products[i]);
		}
	});

	return (
		<div id='petTypeHeader'>
			<div id='petTypeHeaderContent'>
				<div id='sideInfo'>
					<h3>{petType}</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				{firstProductsByType.map(
					(product) =>
						product && (
							<ProductTypeBubbles
								product={product}
								productType={product?.product_type}
								key={product.id}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default ProductTypes;
