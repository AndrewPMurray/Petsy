import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products }) {


    return (
        <div id="productGrid">
            {products.map((product, idx) =>
                idx > 7 ? <></> :
                    <div id={`card-${product.id}`} class="test" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img className="gridImg" src={product?.images[0]?.url}></img>
                        </Link>
                    </div>
            )}
        </div>
    )
}


export default ProductGrid;

