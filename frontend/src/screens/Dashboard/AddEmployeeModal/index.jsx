import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';

import {validateEmail} from '../../../utils/string';

const AddEmployeeModal = ({ handleClose, show, addEmployee }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddEmployee = () => {
    handleClose()

    const employee = {
      'email': email,
      'password': password,
      'firstName': firstName,
      'lastName': lastName,
    }

    addEmployee(employee)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main">
        <div className="modal-header">
          <h3>Add Employee</h3>
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
            />
          </div>
          <div className="password-container">
            <div className="label">Password</div>
            <TextInput
              type="password"
              placeholder="Password here ...."
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
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
            />
          </div>

          <button disabled={!validateEmail(email)} onClick={handleAddEmployee}>
          {loading ? <Spinner animation="border" size="sm" /> : 'ADD'}
        </button>
        </div>
      </section>
    </div>
  );
};

export default AddEmployeeModal;