import ReviewModal from "../ReviewModal";

function Review({ reviews, purchase }) {

    // if the purchased product already exists in the review state, then edit the form and pre propulate information. 
    // otherwise, the form will be a new form and post a a new.
    let message;

    return (
        <div>
            {reviews[purchase.product_id] ? message = 'Edit Review' : 'Add Review'}
            {/* <ReviewModal message={message} /> */}
        </div >
    )
};

export default Review;