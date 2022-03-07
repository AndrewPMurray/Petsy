const LOAD_PRODUCT_TYPES = 'product_types/LOAD_PRODUCT_TYPES';

const load = (productsByType) => ({
	type: LOAD_PRODUCT_TYPES,
	productsByType,
});

export const loadProductTypes = (petTypeId, productTypeId) => async (dispatch) => {
	const response = await fetch(`/api/product_types/${petTypeId}/${productTypeId}`);
	if (response.ok) {
		const products = await response.json();
		console.log(products);
		dispatch(load(products.products));
		return products.products;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

const initialState = {};

const productTypeReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOAD_PRODUCT_TYPES: {
			newState = {};
			action.productsByType.forEach((product) => {
				newState[product.id] = product;
			});
			return newState;
		}
		default:
			return state;
	}
};

export default productTypeReducer;
