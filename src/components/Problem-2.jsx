import React, { useState } from "react";
import CommonModal from "./Modal";

const Problem2 = () => {
  const [isAllContactShow, setisAllContactShow] = useState(false);
  const [isCountryShow, setisCountryShow] = useState(false);

  const [isAllCountryShow, setisAllCountryShow] = useState(false);
  const [isUSAShow, setisUSAShow] = useState(false);

  const handleAllContactShow = () => {
    setisCountryShow(false);
    setisAllContactShow((prev) => !prev);
    setisAllCountryShow(true)
    setisUSAShow(false)
  };
  const handleCountryShow = () => {
    setisAllContactShow(false);
    setisCountryShow((prev) => !prev);
    setisAllCountryShow(false)
    setisUSAShow(true)
  };

  const handleClose = () => {
    setisAllContactShow(false);
    setisCountryShow(false);
  };

  const handleSaveChanges = () => {
    handleClose();
    setisCountryShow();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleAllContactShow}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleCountryShow}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
        {/* modals  */}
        {isAllContactShow && (
          <CommonModal
          isUSAShow={isUSAShow}
          isAllCountryShow={isAllCountryShow}
            show={isAllContactShow}
            handleClose={handleClose}
            title="All Contacts"
            body=""
            onClose={handleClose}
            onSave={handleSaveChanges}
            handleAllContactShow={handleAllContactShow}
            handleCountryShow={handleCountryShow}
          />
        )}
        {isCountryShow && (
          <CommonModal
          isUSAShow={isUSAShow}
          isAllCountryShow={isAllCountryShow}
            show={isCountryShow}
            handleClose={handleClose}
            title="USA ONLY"
            body=""
            onClose={handleClose}
            onSave={handleSaveChanges}
            handleAllContactShow={handleAllContactShow}
            handleCountryShow={handleCountryShow}
          />
        )}
      </div>
    </div>
  );
};

export default Problem2;
