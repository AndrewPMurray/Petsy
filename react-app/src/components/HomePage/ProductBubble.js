import { Link } from 'react-router-dom';
import './ProductBubble.css'

function ProductsBubble({ products }) {
    console.log('-----', products)
    return (
        <div id="bubbleDiv">
            {products.map(product =>
                <div id="bubble" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img src={product.images[0].url}></img>
                    </Link>
                </div>
            )
            }
        </div >
    )
}


export default ProductsBubble;