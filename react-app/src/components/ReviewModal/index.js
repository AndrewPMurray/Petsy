import './ReviewForm.css';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

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
	);
}

export default ReviewModal;
