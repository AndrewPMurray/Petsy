import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

function PurchaseCard({ purchase }) {
    return (
        <div id="purchaseCard">
            <div id="purchasedBy">
                <div>Purchased from {purchase.user.username} on {dayjs(purchase.purchase_date).format("MMM DD, YYYY")} </div>
                <div>${((purchase.product.price * 1.07) + 7.99).toFixed(2)}</div>
            </div>
            <div id="purchasedItem">
                <div id="purchaseItemImageDiv">image</div>
                <div id="purchasedItemInfo">
                    <Link to={`/products/${purchase.product_id}`}>{purchase.product.title}</Link>
                </div>
            </div>
            <div id="purchaseReview">
                <div>
                    test
                    {/* {purchase.product.} */}
                </div>
            </div>
            <div id="buyAgainDiv">
                <div> <button>Buy this again</button></div>
                <div> <p>${(purchase.product.price * 1.07).toFixed(2)}</p> </div>
            </div>
        </div>
    )
}

export default PurchaseCard;