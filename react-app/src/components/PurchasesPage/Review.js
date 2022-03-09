import ReviewModal from "../ReviewModal";

function Review({ reviews, purchase, handleUpdate }) {

    // if the purchased product already exists in the review state, then edit the form and pre propulate information. 
    // otherwise, the form will be a new form and post a a new.
    let message = reviews[purchase.product_id] ? 'Edit Review' : 'Add Review'



    return (
        <div>
            {/* <ReviewModal message={message} reviews={reviews} purchase={purchase} /> */}
            <button onClick={(e) => handleUpdate(e, purchase.product.id)}> {message} </button>
        </div >
    )
};

export default Review;