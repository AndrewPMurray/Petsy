import { useEffect, useRef, useState } from 'react'

function SingleReview({ review }) {
    const [photoPresent, setPhotoPresent] = useState(false)

    const [tooLong, setTooLong] = useState(true)

    const contentRef = useRef();

    console.log(tooLong)
    // console.log(review.user.username, review.url)
    function isOverflowed(e) {
        console.log(e.scrollHeight -1 , e.clientHeight)
        return e.scrollHeight - 1 > e.clientHeight
    } 

    // const reviewContentDiv = document.querySelector('.overflow-review')
    // console.log(reviewContentDiv)

    useEffect(() => {
        if (review?.url) setPhotoPresent(true)
    }, [])
    
    useEffect(() => {
        if (!isOverflowed(contentRef.current)) {
            setTooLong(false);
            return;
        }
    }, [])

    return (
        <div className="single-review-container-div">
            <div className='review-left-side'>
                <div className="review-buyer-header">
                    <i className="fa-solid fa-circle-user"></i>
                    <p className="buyer-username">{review.user.username}</p>
                </div>
                <div className="review-star-div">
                {[...Array(review.rating)].map((ele, idx) => <i className="fas fa-star" key={idx}></i>)}
                </div>
                {tooLong ?
                    <div className="review-content-div overflow-div">
                    <p ref={contentRef} className={`overflow-review review-content-${photoPresent}`}>{review.content}</p>
                    <button
                    className="review-ellipsis-button"
                    onClick={() => setTooLong(false)}>...</button>
                </div> :
                    <p ref={contentRef} className='review-content-text'>{review.content}</p>
                }
            </div>
            <div className='review-right-side-photo'>
                <img className='review-image' src={review.url}></img>
            </div>
        </div>

    )
}

export default SingleReview;