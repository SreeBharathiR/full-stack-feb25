import React, { forwardRef } from "react";
import "./Modal.css";
const Modal = forwardRef(({ children }, ref) => {
  return (
    <div className="container">
      <dialog ref={ref}>{children}</dialog>
      <p>Modal container</p>
    </div>
  );
});

export default Modal;
