import './ProductTypeBubbles.css'
import { Link } from 'react-router-dom';

function ProductTypeBubbles({ products }) {
    return (
        <div id="productTypeBubbles">
            {products.map((product, idx) =>
                <div id="bubble" key={product.id}>
                    {idx > 5 ? '' :
                        <Link to={`/products/${product.id}`}>
                            <img src={product?.images[0]?.url} alt={product.pet_type.title}></img>
                            <span>{product.pet_type.title}</span>
                        </Link>
                    }
                </div>
            )
            }
        </div >
    )

}

export default ProductTypeBubbles;