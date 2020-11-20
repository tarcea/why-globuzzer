import React, { useContext } from 'react';
import contact from './Contact.module.css';
import { CgCloseR } from 'react-icons/cg';
import { ContactContext } from '../.././contexts/ContactContext';

const Contact = ({ width }) => {
  const { handleContact, handleForm, handleSubmit, details } = useContext(ContactContext);
  let smallScreen = (width <= 500 ? true : false);

  return (
    <div>
      <div className={contact.container}>
        <div className={contact.header}>
          <h1>CONTACT US</h1>
          <p>If you have any questions,
          please don’t hesitate to contact us.
          </p>
        </div>
          <CgCloseR className={contact.close}
                    onClick={handleContact}
          />
        <div className={contact.form}>
          <form action="" onSubmit={handleSubmit}>
          <p>*Mandatory field</p>
            <input type="text"
                   id="name"
                   placeholder="Name*"
                   onChange={handleForm}
                   value={details.name}
            />
            <input type="text"
                   id="email"
                   placeholder="Email*"
                   onChange={handleForm}
                   value={details.email}
            />
            <input type="text"
                   id="subject"
                   placeholder="Subject*"
                   onChange={handleForm}
                   value={details.subject}
            />
            <textarea id="message" cols="30" rows="10"
                      placeholder="Message* (maximum 1000 words)"
                      onChange={handleForm}
                      value={details.message}
                      >
            </textarea>
            <button className={contact.button}
                    onSubmit={handleSubmit}>Submit
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Contact;
