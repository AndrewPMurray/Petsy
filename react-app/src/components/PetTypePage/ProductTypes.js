// import ProductsBubble from "../ProductBubbles"

import ProductTypeBubbles from "../ProductTypeBubbles";

function ProductTypes({ products }) {

    return (
        <div id="petTypeHeader">
            <div id="petTypeHeaderContent">
                <div id="sideInfo">
                    <h3>Pet Type</h3>
                    <>
                        Necklaces, bracelets, earrings, and rings to complete your look or wow them with a perfect gift
                    </>
                </div>
                <ProductTypeBubbles products={products} />
            </div>
        </div>

    )
};


export default ProductTypes;