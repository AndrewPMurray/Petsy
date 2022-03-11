import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // <test setShowModal={setShowModal} />
  return (
    <>
      <button id='login' onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

// export const test = (setShowModal) => setShowModal(true)

export default LoginFormModal;
