import './DetailedProductGrid.css'
import ProductCard from './ProductCard';

function DetailedProductGrid({ products }) {
    const totalRatings = products.length;

    console.log('DETAILED PRODUCT GRID', products)
    return (
        <div id="detailedProductGrid">
            {products.map((product, idx) =>
                <ProductCard product={product} totalRatings={totalRatings} key={product.id} />
            )}
        </div>
    )
}


export default DetailedProductGrid;

