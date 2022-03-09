import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function ReviewForm() {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(null);
    const [url, setUrl] = useState('');
    const [hover, setHover] = useState(null)
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('creatingreview')
    }

    return (
        <div id="reviewForm">

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Review</label>
                    <input
                        name='content'
                        type='text'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></input>
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
                <label>Image</label>
                <input
                    name='url'
                    type='text'
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                ></input>
            </form>

        </div>
    )
}
