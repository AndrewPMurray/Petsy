import './Purchases.css'
import { loadReviewsByUser } from '../../store/reviews';
import { loadPurchases } from '../../store/purchases';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PurchaseCard from './PurchaseCard';
import ReviewForm from '../ReviewModal/ReviewForm'


function Purchases() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user);
    const purchases = useSelector(state => Object.values(state?.purchases))
    const reviews = useSelector(state => state?.userReviews)
    const [page, setPage] = useState(1)
    const [data, setData] = useState('')

    useEffect(() => {
        dispatch(loadPurchases(user.id))
        dispatch(loadReviewsByUser(user.id))
    }, [dispatch, user.id]);


    const handlePage = () => {
        setPage(1);
    };

    const handleUpdate = (e, purchase) => {
        e.preventDefault();
        setPage(2);
        setData(purchase)
    }


    return (

        <>

            {page === 1 &&
                < div id="purchasesPage" >
                    {purchases.map(purchase => <PurchaseCard purchase={purchase} reviews={reviews} key={purchase.id} handlePage={handlePage} handleUpdate={handleUpdate} userId={user.id} />)}
                </div >
            }
            {page === 2 && <ReviewForm handlePage={handlePage} userId={user.id} purchase={data} />}
        </>


    )
};

export default Purchases;
