import React from "react";
import Portal from "../Portal";
import "./Modal.css";

export const Modal = ({ children, close, active }) => {
  return (
    <Portal>
      {active && (
        <div className="o-container-modal">
          <div className="o-content-modal">
            <div className="o-btn-modal" onClick={close}>
              X
            </div>
            <div>{children}</div>
          </div>
          <div className="o-background-modal" onClick={close}></div>
        </div>
      )}
    </Portal>
  );
};
