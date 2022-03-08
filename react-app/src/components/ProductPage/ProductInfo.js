import { useState } from "react";

function ProductInfo({ product }) {
    const [hiddenHighlights, setHiddenHighlights] = useState(false);
    const [hiddenDes, setHiddenDes] = useState(false)

    function getRandomNum() {
        const min = 3;
        const max = 25;
        const rand = min + Math.random() * (max - min);
        return Math.floor(rand)
    }
    
    const handleHiddenHighlights = (e) => {
        e.preventDefault()
        setHiddenHighlights(!hiddenHighlights)
    }

    const handleHiddenDes = (e) => {
        e.preventDefault()
        setHiddenDes(!hiddenDes)
    }

    //  main button (Highlights/Description) changes display: hidden
    // two CSS class names <button>...</button>
    //     1. overflow: hidden, text-overflow: ellipsis !important
    //      2. regular css, not hidden


    return (
        <>
            <div className="info-title-price">
                <h2>{product.title}</h2>
                <h3>${product.price.toFixed(2)}</h3>
            </div>
            <div className="info-button-quantity">
                <button>Add to cart</button>
                <div className="info-icons">
                    <div className="one-line">
                        <i className="fa-solid fa-hourglass"></i>
                        <p>Selling fast! Only {product.quantity} left, {getRandomNum()} people have it in their carts.</p>
                    </div>
                    <div className="one-line">
                        <i class="fa-solid fa-square-check"></i>
                        <p>Star Seller. This seller has a history of 5-star reviews and shipping on time.</p>
                    </div>
                    <div className="one-line">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Hooray! This item ships free to the US.</p>
                    </div>
                </div>
            </div>
            {/* //  main button (Highlights/Description) changes display: hidden
                // two CSS class names <button>...</button>
                //     1. overflow: hidden, text-overflow: ellipsis !important
                //      2. regular css, not hidden */}
            <div className="info-details-description-div">
                <div className="info-highlights">
                <button onClick={handleHiddenHighlights}>Highlights</button>
                    <div>
                        <i className="fa-solid fa-hands"></i>
                        <p>{product.details[0]}</p>
                    </div>
                    {product.details.length > 1 &&
                        <div>
                            <i class="fa-solid fa-toolbox"></i>
                            <p>{product.details[1]}</p>
                        </div>
                    }
                </div>
                <div className="info-description">
                <button onClick={handleHiddenDes}>Description</button>
                    
                </div>
            </div>
        </>
    )
}

export default ProductInfo