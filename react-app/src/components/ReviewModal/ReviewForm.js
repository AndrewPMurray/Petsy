import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import './ReviewForm.css'
import UploadPicture from '../ListingForm/UploadPicture';
import { createReview } from '../../store/reviews';


export default function ReviewForm() {
    const user = useSelector(state => state.session?.user)
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(null);
    const [url, setUrl] = useState('');
    const [hover, setHover] = useState(null)
    const [errors, setErrors] = useState([]);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {
            content, rating, user_id: user.id, url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', product_id: 30
        }

        dispatch(createReview(newReview));
        history.push('/purchases')
    }

    return (
        <div id='formPage'>
            <div id="reviewForm">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Review</label>
                        <textarea
                            name='content'
                            type='text'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <div id="starRating">
                        {[...Array(5)].map((star, idx) => {
                            const ratingVal = idx + 1;
                            return (
                                <label key={idx}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingVal}
                                        placeholder="Tell us about your experience"
                                        onClick={() => setRating(ratingVal)}
                                    />
                                    <FaStar
                                        className="ratingStars"
                                        size={40}
                                        onMouseEnter={() => setHover(ratingVal)}
                                        onMouseLeave={() => setHover(null)}
                                        color={ratingVal <= (hover || rating) ? "FFA534" : "#e4e5e9"} />
                                </label>
                            )
                        })}
                    </div>

                    <div>

                        <button onSubmit={handleSubmit}>submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
