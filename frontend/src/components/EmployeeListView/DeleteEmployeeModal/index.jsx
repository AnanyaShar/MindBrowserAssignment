import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';

import './styles.scss';
import Cross from '../../../assets/svg/cross.svg';
import TextInput from '../../../components/TextInput';

import {validateEmail} from '../../../utils/string';

const DeleteEmployeeModal = ({ handleClose, show, employeeId, deleteEmployee }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const [loading, setLoading] = useState(false);

  const deleteEmployeeHandler = () => {
    handleClose()

    deleteEmployee(employeeId)
  }

  return (
    <div className={showHideClassName}>
      
      <section className="modal-main">
        <div className="modal-header">
          <h3>Sure you want to delete the employee?</h3>
          <img src={Cross} alt="close modal" onClick={handleClose} />
        </div>
        
        <div className="modal-body">
          <div className="delete-anchors">
            <a onClick={deleteEmployeeHandler} className="delete-anchor">
                Delete
            </a>
            <a onClick={handleClose} className="cancel-anchor">
                Cancel
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default DeleteEmployeeModal;