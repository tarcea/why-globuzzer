import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

const ContactContextProvider = (props) => {

  const [contact, setContact] = useState(null);
  const rawDetails = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  const [details, setDetails] = useState(rawDetails);

  const handleContact = () => {
    setContact(!contact)
  }

  const handleForm = (e) => {
    const value = e.target.value;
    setDetails({...details, [e.target.id]: value});
    // console.log(details)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails(rawDetails);
  }

  return (
    <ContactContext.Provider
    value={{ contact, handleContact, details, handleForm, handleSubmit }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;
