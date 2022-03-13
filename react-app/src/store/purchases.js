const LOAD = 'purchases/LOAD';

const load = (purchases) => ({
	type: LOAD,
	purchases,
});

export const loadPurchases = (userId) => async (dispatch) => {
	const response = await fetch(`/api/purchases/${userId}`);
	if (response.ok) {
		const purchases = await response.json();
		dispatch(load(purchases.purchases));
	} else {
		const errors = await response.json();
		return errors;
	}
};

let initialState = {};

const purchasesReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOAD: {
			newState = {};
			action.purchases.forEach((purchase) => {
				newState[purchase.id] = purchase;
			});
			return newState;
		}
		default:
			return state;
	}
};

export default purchasesReducer;
