// import ProductsBubble from "../ProductBubbles"

import ProductTypeBubbles from '../ProductTypeBubbles';

function ProductTypes({ productTypes, products, petType }) {
	return (
		<div id='petTypeHeader'>
			<div id='petTypeHeaderContent'>
				<div id='sideInfo'>
					<h3>{petType}</h3>
					<>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</>
				</div>
				<ProductTypeBubbles products={products} productTypes={productTypes} />
			</div>
		</div>
	);
}

export default ProductTypes;
