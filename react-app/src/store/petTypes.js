const LOAD_PET_TYPES = 'pet_types/LOAD_PET_TYPES';

const load = (productsByPet) => ({
	type: LOAD_PET_TYPES,
	productsByPet,
});

export const loadPetTypes = (id) => async (dispatch) => {
	const response = await fetch(`/api/pet_types/${id}`);
	if (response.ok) {
		const products = await response.json();
		dispatch(load(products.products));
		return products.pet_types;
	} else {
		const errors = await response.json();
		console.log(errors.errors);
	}
};

const initialState = {};

const petTypeReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOAD_PET_TYPES: {
			newState = {};
			action.productsByPet.forEach((product) => {
				newState[product.id] = product;
			});
			return newState;
		}
		default:
			return state;
	}
};

export default petTypeReducer;
