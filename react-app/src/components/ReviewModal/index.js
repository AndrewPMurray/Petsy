import './ReviewForm.css'
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function ReviewModal({ message }) {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {

        console.log(showModal)
    }, [showModal])
    return (
        <>
            <button onClick={() => setShowModal(true)}>{message}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm />
                </Modal>
            )}
        </>
    )
}

export default ReviewModal;