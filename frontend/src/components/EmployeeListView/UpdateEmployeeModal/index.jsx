import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';

import {validateEmail} from '../../../utils/string';

const UpdateEmployeeModal = ({ handleClose, show, file }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [email, setEmail] = useState(file.email);
//   const [password, setPassword] = useState(file);
  const [firstName, setFirstName] = useState(file.firstName);
  const [lastName, setLastName] = useState(file.lastName);
  const [loading, setLoading] = useState(false);

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main">
        <div className="modal-header">
          <h3>Update Employee</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>
        
        <div className="modal-body">
          <div className="email-container">
            <div className="label">Email Address</div>
            <TextInput
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              // onKeyDown={handleKeyPress}
            />
          </div>
          <div className="email-container">
            <div className="label">First Name</div>
            <TextInput
              type="text"
              placeholder="Ananya"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              // onKeyDown={handleKeyPress}
            />
          </div>

          <div className="email-container">
            <div className="label">Last Name</div>
            <TextInput
              type="text"
              placeholder="Sharma"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              // onKeyDown={handleKeyPress}
            />
          </div>

          <button disabled={!validateEmail(email)} onClick={handleClose}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Update'}
        </button>
        </div>
      </section>
    </div>
  );
};

export default UpdateEmployeeModal;