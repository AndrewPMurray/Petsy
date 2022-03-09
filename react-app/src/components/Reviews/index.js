import { useState, useEffect } from 'react';
import './Reviews.css'

function Reviews({ product, products }) {
    const sellerProducts = Object.values(products).filter((p) => p?.user_id === product.user?.id);

    const [noItemReviews, setNoItemReviews] = useState(false);
    const [noReviews, setNoReviews] = useState(false);

    let allReviews = [];
    sellerProducts.map(p => {
        allReviews.push(...p.reviews)
    })

    useEffect(() => {
        if (!product.reviews.length) setNoItemReviews(true)
        if (!product.reviews.length && !allReviews) setNoReviews(true);
    }, [])

    return (
        <div className="reviews-container-div">
            <div className="reviews-header">
                <h1>REVIEWS - AVG RATING</h1>
                <div className="review-raving">
                    <i className="fa-solid fa-medal"></i>
                    <p>Buyers are raving! Multiple people gave 5-star reviews to this shop in the past 7 days.</p>
                </div>
            </div>
            {noReviews ?
                <div>
                    <h3>No reviews yet for this seller</h3>
                    <p>Buy this item to leave the first review</p>
                </div> :
                <div className="reviews-body">
                    <div className="reviews-title-bar">
                        {!noItemReviews &&
                            <div className="reviews-item-button">
                                <p>Reviews for this item</p>
                                <p className="review-total">{product?.reviews?.length}</p>
                            </div>
                        }
                        <div className="reviews-seller-button">
                            <p>Reviews for this seller</p>
                            <p className="review-seller-total">{allReviews.length}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Reviews;
