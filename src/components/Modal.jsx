import React, { useEffect, useRef } from "react";

const Modal = ({ openModal, closeModal, children }) => {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
};

export default Modal;
