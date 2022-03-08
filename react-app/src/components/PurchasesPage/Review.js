function Review({ reviews, purchase }) {

    // if the purchased product already exists in the review state, then edit the form and pre propulate information. 
    // otherwise, the form will be a new form and post a a new.

    return (
        <div>
            {reviews[purchase.product_id] ? 'true' : 'false'}
        </div>
    )
};

export default Review;