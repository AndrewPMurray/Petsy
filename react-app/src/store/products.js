const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS';
const CREATE_PRODUCT = 'products/CREATE_PRODUCT';
const EDIT_PRODUCT = 'products/EDIT_PRODUCT';
const DELETE_PRODUCT = 'products/DELETE_PRODUCT';

const load = (products) => ({
	type: LOAD_PRODUCTS,
	products,
});

const create = (newProduct) => ({
	type: CREATE_PRODUCT,
	newProduct,
});

const edit = (product) => ({
	type: EDIT_PRODUCT,
	editedProduct: product,
});

const remove = (product) => ({
	type: DELETE_PRODUCT,
	deletedProduct: product,
});

export const loadProducts = () => async (dispatch) => {
	const response = await fetch('/api/products/');
	if (response.ok) {
		const products = await response.json();
		dispatch(load(products.all_products));
		return products.all_products;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

export const createProduct = (product) => async (dispatch) => {
	const response = await fetch('/api/products/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product),
	});
	if (response.ok) {
		const newProduct = await response.json();
		dispatch(create(newProduct));
		return newProduct;
	} else {
		const errors = await response.json();
		return errors;
	}
};

export const editProduct = (product) => async (dispatch) => {
	const response = await fetch(`/api/products/${product.id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(product),
	});
	if (response.ok) {
		const editedProduct = await response.json();
		dispatch(edit(editedProduct));
		return editedProduct;
	} else {
		const errors = await response.json();
		return errors;
	}
};

export const deleteProduct = (product) => async (dispatch) => {
	const response = await fetch(`/api/products/${product.id}`, {
		method: 'DELETE',
		body: JSON.stringify(product),
	});
	if (response.ok) {
		const deletedProduct = await response.json();
		dispatch(remove(deletedProduct));
		return deletedProduct;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

let initialState = {};

const productsReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOAD_PRODUCTS: {
			newState = { ...state };
			action.products.forEach((product) => {
				newState[product.id] = product;
			});
			return newState;
		}

		case CREATE_PRODUCT: {
			return { [action.newProduct.id]: action.newProduct, ...state };
		}

		case EDIT_PRODUCT: {
			return { [action.editedProduct.id]: action.editedProduct, ...state };
		}

		case DELETE_PRODUCT: {
			newState = { ...state };
			console.log(action.deletedProduct);
			delete newState[action.deletedProduct.id];
			return newState;
		}
		default:
			return state;
	}
};

export default productsReducer;
