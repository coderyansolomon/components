'use client'

import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-lg">
            <button onClick={handleClose} className="mb-4 text-red-500">
              Close
            </button>
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <p>This is the modal content. It is self-contained and doesn't take any props.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
