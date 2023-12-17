// MyModal.js
import React from "react";
import { Modal } from "react-bootstrap";
import AllCountryList from "./AllCountrysData";
import USAList from "./UsaData";

const CommonModal = ({isUSAShow,  isAllCountryShow ,show, handleClose, title, body, onClose, handleAllContactShow , handleCountryShow}) => {
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isAllCountryShow &&  <AllCountryList/>}
        {isUSAShow &&  <USAList/> }
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleAllContactShow}
          className="btn btn-lg btn-outline-primary btn_1"
          type="button"
        >
          All Contacts
        </button>
        <button
          onClick={handleCountryShow}
          className="btn btn-lg btn_2"
          type="button"
        >
          US Contacts
        </button>
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

export default CommonModal;
