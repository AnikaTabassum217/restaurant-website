import React, { useState } from 'react';
import Modal from 'react-modal';
import FormModal from './FormModal';

const MainComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Main Component</h1>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Form Modal"
      >
        <FormModal closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default MainComponent;
