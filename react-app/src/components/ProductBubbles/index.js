import { Link } from 'react-router-dom';
import './ProductBubble.css'

function ProductsBubble({ products }) {

    return (
        <div id="bubbleDiv">
            {products.map((product, idx) =>
                <div id="bubble" key={product.id}>
                    {idx > 6 ? '' :
                        <Link to={`/products/${product.id}`}>
                            <img src={product?.images[0]?.url} alt={product.title}></img>
                            <span>{product.title.split(' ')[0] + " " + product.title.split(' ')[1]}</span>
                        </Link>
                    }
                </div>
            )
            }
        </div >
    )
}


export default ProductsBubble;