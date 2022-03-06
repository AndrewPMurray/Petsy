import { Link } from 'react-router-dom';


function ProductCard({ product, totalRatings }) {
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
                    {product.rating}
                </div>
                <div>
                    ${product.price} ({totalRatings})
                </div>
                <div>
                    {product.user.username}
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;
