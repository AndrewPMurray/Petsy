// const LOAD_REVIEWS_BY_PRODUCT = 'reviews/LOAD_REVIEWS_BY_PRODUCT';
const LOAD_REVIEWS_BY_USER = 'reviews/LOAD_REVIEWS_BY_USER';

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

// const loadByProduct = (reviews) => ({
//     type: LOAD_REVIEWS_BY_PRODUCT,
//     reviews,
// });

const loadByUser = (reviews) => ({
    type: LOAD_REVIEWS_BY_USER,
    reviews,
});

const create = (newReview) => ({
    type: CREATE_REVIEW,
    newReview,
});

const edit = (editedReview) => ({
    type: EDIT_REVIEW,
    editedReview,
});

const remove = (deletedReview) => ({
    type: DELETE_REVIEW,
    deletedReview,
});

export const loadReviewsByUser = (userId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${userId}`)
    if (response.ok) {
        const reviews = await response.json();
        dispatch(loadByUser(reviews.userReviews))
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const createReview = (review) => async (dispatch) => {
    // console.log('THINK', review)

    const formData = new FormData();
    formData.append('image', review.url)
    // console.log('FORM DATA', formData)
    // console.log('FORM DATA.GET', formData.get('image'))

    review.url = formData
    console.log('review.url', review.url.get('image'))




    const response = await fetch('/api/reviews/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const newReview = await response.json();
        dispatch(create(newReview));
        return newReview;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
}

export const editReview = (review, reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const editedReview = await response.json();
        dispatch(edit(editedReview));
        return editedReview;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
};

export const deleteReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}`, {
        method: 'DELETE',
        body: JSON.stringify(review),
    });
    if (response.ok) {
        const deletedReview = await response.json();
        dispatch(remove(deletedReview));
        return deletedReview;
    } else {
        const errors = await response.json();
        console.log(errors.errors);
    }
};

const reviewReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS_BY_USER: {
            // will return reviews with a key of the product_id
            newState = {};
            action.reviews.forEach(review => {
                newState[review.product_id] = review
            })
            return newState;
        }
        case CREATE_REVIEW: {
            return { [action.newReview.id]: action.newReview, ...state }
        }
        case EDIT_REVIEW: {
            return { [action.editedReview.id]: action.editedReview, ...state }
        }
        case DELETE_REVIEW: {
            newState = { ...state };
            delete newState[action.deleteReview];
            return newState;
        }
        default:
            return state;
    }
}

export default reviewReducer