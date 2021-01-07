/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
// import moment from 'moment';
// import {CircularProgressbar} from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

import Avatar from '../Avatar';
// import DeleteModal from './DeleteModal';
// import {getTimeDiff} from '../../utils/string';
import EmployeeListView from '../../components/EmployeeListView';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useHistory, useLocation} from 'react-router-dom';
// import {setFileDetails} from '../../store/details/actions';
import {ProgressBar} from 'react-bootstrap';

// export interface Props {
//   files: any[];
//   onDelete: any;
// }

/**
 * Employee List Component
 * @constructor
 */
function EmployeeList({files, onDelete}) {
  const history = useHistory();
  const location = useLocation();

  console.log(files);

  return (
    <div className="employee-list">
        <div className="list-table-header">
          <h3 className="flex2">Email</h3>
          <h3 className="flex2">Name</h3>
          <h3 className="flex1">Company</h3>
          <h3 className="flex1">DOB</h3>
          <h3 className="flex3">Address</h3>
          <h3 className="flex2 actions-header">Actions</h3>
        </div>

        <div className="employee-list-view-container">
          {!!files && files.map((file, index) => (
            <EmployeeListView key={index} file={file}/>
          ))}
        </div>
    </div>
  );
}

export default EmployeeList;
