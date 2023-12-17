import React, { useEffect, useState } from 'react';

const AllCountryList = () => {
    const [contacts, setContacts] = useState([]);
    console.log(contacts)
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setContacts(data?.results))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <div>
            <h2>All Country List Here</h2>
            <ul className='max-h-500'>
                {contacts.map((contact, index) => (
                    <li key={index}>
                       {contact?.country?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllCountryList;
