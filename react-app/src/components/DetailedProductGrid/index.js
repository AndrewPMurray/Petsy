import { Link } from 'react-router-dom';
import './ProductGrid.css'

function DetailedProductGrid({ products }) {


    return (
        <div id="detailedProductGrid">
            {products.map((product, idx) =>
                idx > 7 ? <></> :
                    <div id={`card-${product.id}`} class="test" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img className="gridImg" src={product?.images[0]?.url} alt={product}></img>
                        </Link>
                    </div>
            )}
        </div>
    )
}


export default DetailedProductGrid;

