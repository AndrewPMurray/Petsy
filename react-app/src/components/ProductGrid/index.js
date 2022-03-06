import { Link } from 'react-router-dom';
import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid({ products }) {
    return (
        <div id="productGrid">
            {products.map(product =>
                <div id="productCard" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img className="gridImg" id={`gridImg-${product.id}`} src={product.images[0].url}></img>
                    </Link>
                </div>
            )
            }
        </div>
    )
}

export default ProductGrid;

