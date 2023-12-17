import React, { useEffect, useState } from 'react';

const USAList = () => {
  const [contacts, setContacts] = useState([]);
  const [showEvenIds, setShowEvenIds] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://contact.mediusware.com/api/country-contacts/United%20States/?page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setContacts(data?.results))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleCheckboxChange = () => {
    setShowEvenIds(!showEvenIds);
  };

  return (
    <div>
      <h2>USA ONLY</h2>
     
      <ul className='max-h-500'>
        {contacts.map((contact, index) => (
          (showEvenIds && index % 2 === 0) || !showEvenIds ? (
            <li key={index}>
              {contact?.country?.name}
            </li>
          ) : null
        ))}
      </ul>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showEvenIds}
            onChange={handleCheckboxChange}
          />
          Show Even IDs
        </label>
      </div>
    </div>
  );
};

export default USAList;
