const ADD = 'cart/ADD';
const REMOVE = 'cart/REMOVE';
const UPDATE_COUNT = 'cart/UPDATE_COUNT';
const RESET = 'cart/RESET';

export const addToCart = (id) => ({
	type: ADD,
	id,
});

export const remove = (id) => ({
	type: REMOVE,
	id,
});

export const updateCount = (id, count) => {
	if (count < 1) return remove(id);
	return {
		type: UPDATE_COUNT,
		id,
		count,
	};
};

export const reset = () => {
	return {
		type: RESET
	};
};


const initialState = JSON.parse(window.localStorage.getItem('cart')) || {};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD: {
			const newState = { ...state };
			newState[action.id] = { id: action.id, count: 1 };
			window.localStorage.setItem('cart', JSON.stringify(newState));
			return newState;
		}
		case REMOVE: {
			const newState = { ...state };
			delete newState[action.id];
			window.localStorage.setItem('cart', JSON.stringify(newState));
			return newState;
		}
		case UPDATE_COUNT: {
			const newState = { ...state };
			newState[action.id].count = action.count;
			window.localStorage.setItem('cart', JSON.stringify(newState));
			return newState;
		}
		case RESET: {
			window.localStorage.removeItem('cart')
			return initialState;
		}
		default:
			return state;
	}
};

export default cartReducer;
