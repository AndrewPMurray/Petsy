import './ReviewForm.css'
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function ReviewModal({ message }) {
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1)
    useEffect(() => {

        console.log(page)
    }, [page])
    return (
        <>
            {/* <button onClick={() => setShowModal(true)}>{message}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm />
                </Modal>
            )} */}

            <button onClick={() => setPage(2)}>{message}</button>
            {page == 2 && (
                <Modal>
                    <ReviewForm />
                </Modal>
            )}
        </>
    )
}

export default ReviewModal;