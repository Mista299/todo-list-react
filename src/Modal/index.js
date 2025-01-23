import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <>
      <div className="Modal-overlay"></div>
      <div className="Modal">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
}

export { Modal };
console.log('Rendering Modal component');