import './ReviewForm.css'
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function ReviewModal({ message, product, userId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>{message}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm product={product} userId={userId} />
                </Modal>
            )}
        </>
    )
}

export default ReviewModal;