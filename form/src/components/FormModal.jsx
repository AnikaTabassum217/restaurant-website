import React, { useState } from 'react';

const FormModal = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted with value:', inputValue);
    // Close the modal
    closeModal();
  };

  return (
    <div>
      <h2>Form Modal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a value"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormModal;
