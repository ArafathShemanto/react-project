import React, { useEffect, useState } from "react";
import DetailsModal from "./DetailsModal";

const AllCountryList = () => {
  const [contacts, setContacts] = useState([]);
  const [showEvenIds, setShowEvenIds] = useState(false);
  const [countryName, setCountryName] = useState(false);
  const [detailsShow, setDetailsShow] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setDetailsShow(false);
  };

  const handleSaveChanges = () => {
    handleClose();
    setDetailsShow();
  };

  const fetchData = () => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setContacts(data?.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleCheckboxChange = () => {
    setShowEvenIds(!showEvenIds);
  };
  const detailsHandler = (countryName) => {
    setCountryName(countryName);
    setDetailsShow(prev => !prev);
  };


  return (
    <>
      <div>
        <h2>All Country</h2>

        <ul className="max-h-500">
          {contacts.map((contact, index) =>
            (showEvenIds && index % 2 === 0) || !showEvenIds ? (
              <li className="mb-2"  key={index}>{contact?.country?.name} <button className="btn btn-sm btn-outline-primary" onClick={()=> detailsHandler(contact?.country?.name)}>SHOW DETAILS</button></li>
            ) : null
          )}
        </ul>
        <div className="mt-3">
          <label>
            <input
              type="checkbox"
              checked={showEvenIds}
              className="mr-3"
              onChange={handleCheckboxChange}
            />
            Show Even IDs
          </label>
        </div>
      </div>
                
      {detailsShow && (
        <DetailsModal
          show={detailsShow}
          handleClose={handleClose}
          title="countryName"
          body={countryName}
          onClose={handleClose}
          onSave={handleSaveChanges}
        />
      )}
    </>
  );
};

export default AllCountryList;
