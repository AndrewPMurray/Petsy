import { Link } from 'react-router-dom';


function ProductCard({ product }) {
    // const reviews = Object.keys(product?.reviews).length

    const reviews = Object.values(product?.reviews)

    console.log(reviews)


    const ratings = [];
    if (reviews) {
        for (let i = 0; i < reviews.length; i++) {
            ratings.push(reviews[i].rating)
        };
    }

    const averageRating = (ratings.reduce((a, b) => a + b, 0) / reviews.length);
    console.log('average', averageRating)

    const stars = [];
    for (let i = 0; i < averageRating; i++) {
        stars.push(i)
    };

    console.log('stars', stars)


    return (
        <div>
            <Link to={`/products/${product.id}`}>
                <div>
                    <img className="detailedCard" src={product?.images[0]?.url} alt={product}></img>
                </div>
                <div>
                    {product.title}
                </div>
                <div>
                    < span >
                        {stars.map((star) => (
                            <i className="fas fa-star" key={star}></i>
                        ))}
                    </span>
                </div>
                <div>
                    ${product.price}
                </div>
                <div>
                    {product.user.username}
                    {averageRating > 0 ? <>({reviews.length} reviews)</> : ""}

                </div>
            </Link>
        </div>
    )
}

export default ProductCard;
