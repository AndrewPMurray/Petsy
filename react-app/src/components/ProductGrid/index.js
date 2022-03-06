import { Link } from 'react-router-dom';
import './ProductGrid.css'

function ProductGrid({ products }) {


    return (
        <div id="productGrid">
            {products.map((product, idx) =>
                idx > 7 ? '' :
                    <div key={product.id} id={`card-${product.id}`} className="test">
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <img className="gridImg" src={product?.images[0]?.url} alt={product.title}></img>
                        </Link>
                    </div>
            )}
        </div>
    )
}


export default ProductGrid;

