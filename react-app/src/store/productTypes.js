const LOAD_PRODUCT_TYPES_BY_PET = 'product_types/LOAD_PRODUCT_TYPES_BY_PET';
const LOAD_PRODUCT_TYPES = 'product_types/LOAD_PRODUCT_TYPES';

const load = (productsByType) => ({
	type: LOAD_PRODUCT_TYPES_BY_PET,
	productsByType,
});

const loadTypes = (productTypes) => ({
	type: LOAD_PRODUCT_TYPES,
	productTypes,
});

export const loadProductTypesByPet = (petTypeId, productTypeId) => async (dispatch) => {
	const response = await fetch(`/api/product_types/${petTypeId}/${productTypeId}`);
	if (response.ok) {
		const products = await response.json();
		dispatch(load(products.products));
		return products.products;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

export const loadProductTypes = () => async (dispatch) => {
	const response = await fetch('/api/product_types/');
	if (response.ok) {
		const productTypes = await response.json();
		dispatch(loadTypes(productTypes.all_types));
		return productTypes.all_types;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

const initialState = { types: [] };

const productTypeReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOAD_PRODUCT_TYPES_BY_PET: {
			newState = { types: [] };
			action.productsByType.forEach((product) => {
				newState[product.id] = product;
			});
			return newState;
		}
		case LOAD_PRODUCT_TYPES: {
			newState = { ...state, types: [] };
			newState.types = action.productTypes;
			return newState;
		}
		default:
			return state;
	}
};

export default productTypeReducer;
