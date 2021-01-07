/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import Avatar from '../Avatar';
import UpdateEmployeeModal from './UpdateEmployeeModal';
import DeleteEmployeeModal from './DeleteEmployeeModal';
import './styles.scss';
import {useHistory, useLocation} from 'react-router-dom';
// import {setFileDetails} from '../../store/details/actions';
import {ProgressBar} from 'react-bootstrap';

/**
 * Employee List View Component
 * @constructor
 */
function EmployeeListView({file}) {
  const history = useHistory();
  const location = useLocation();

  const [updateEmployee, setUpdateEmployee] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState(false);

  console.log(file);

  return (
    <div className="employee-list-view">
      <UpdateEmployeeModal 
        show={updateEmployee}
        handleClose={() => setUpdateEmployee(false)}
        file={file}
      />

      <DeleteEmployeeModal 
        show={deleteEmployee}
        handleClose={() => setDeleteEmployee(false)}
      />

      <h3 className="flex2">{file.email}</h3>
      <h3 className="flex2">{file.firstName} {file.lastName}</h3>
      <h3 className="flex1">{file.company}</h3>
      <h3 className="flex1">{file.dob}</h3>
      <h3 className="flex3">{file.address}</h3>
      <div className="actions">
          <button onClick={() => setUpdateEmployee(true)} className="update-btn">Update</button>
          <button onClick={() => setDeleteEmployee(true)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default EmployeeListView;
