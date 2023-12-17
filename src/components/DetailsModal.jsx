// MyModal.js
import React from "react";
import { Modal } from "react-bootstrap";

const DetailsModal = ({show, handleClose, title, body, onClose, }) => {
  console.log(show)
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={onClose}
          className="btn btn-lg btn_3"
          type="button"
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;
