// import './ReviewForm.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';


function ReviewModal({ message }) {
    const [showModal, setShowModal] = useState(false);


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