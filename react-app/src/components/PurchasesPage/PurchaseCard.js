import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Review from './Review';


function PurchaseCard({ purchase, reviews, handlePage, userId, handleUpdate }) {
    return (
        <div id="purchaseCard">
            <div id="purchasedBy">
                <div>Purchased from {purchase.product.user.username} on {dayjs(purchase.purchase_date).format("MMM DD, YYYY")} </div>
                <div>${((purchase.product.price * 1.07) + 7.99).toFixed(2)}</div>
            </div>
            <div id="purchasedItem">
                <div id="purchaseItemImageDiv">
                    <img src={purchase.product.images[0].url} id="purchasedImg"></img>
                </div>
                <div id="purchasedItemInfo">
                    <Link to={`/products/${purchase.product_id}`}>{purchase.product.title}</Link>
                </div>
            </div>
            <div id="purchaseReview">
                <div>
                    <Review purchase={purchase} reviews={reviews} handlePage={handlePage} userId={userId} handleUpdate={handleUpdate} />
                </div>
            </div>
            <div id="buyAgainDiv">
                <div> <button id="buyAgainButton">Buy this again</button></div>
                <div> <p>${(purchase.product.price * 1.07).toFixed(2)}</p> </div>
            </div>
        </div>
    )
}

export default PurchaseCard;