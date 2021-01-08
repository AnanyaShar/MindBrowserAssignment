/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import InputSearch from '../../components/InputSearch';
// import RadioButtonGroup from '../../components/RadioButtonGroup';
import AddEmployeeModal from './AddEmployeeModal';
import EmployeeList from '../../components/EmployeeList';
import Loading from '../../components/Loading';
import TopBar from '../../components/TopBar';
import {createEmployee, updateEmployee, deleteEmployee, getEmployees} from '../../utils/service'
// import Stats from './Stats';
// import {setStats} from '../../store/user/actions';
// import {RootState} from '../../store';
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
// import {appendFiles, setFiles} from '../../store/dashboard/actions';
import {Row, Spinner, Col} from 'react-bootstrap';
import { setProfile } from '../../store/user/actions';

/**
 * Dashboard Screen
 * @constructor
 */
function DashboardScreen() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);
  const [successAddEmployee, setSuccessAddEmployee] = useState('');
  const [successUpdateEmployee, setSuccessUpdateEmployee] = useState('');
  const [successDeleteEmployee, setSuccessDeleteEmployee] = useState('');

  const dispatch = useDispatch();

  // User Profile, Details, Records imported from redux store
  const {
    profiles,
  } = useSelector(
    (state) => ({
      profiles: state.user.profile,
    }),
    shallowEqual,
  );

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

  const addEmployeeHandler = (employee) => {
    if(employee) {
      setLoading(true);
      createEmployee(employee)
        .then((res) => {
          setSuccessAddEmployee('Employee created Successfully');
        })
        .then(() => {
          return getEmployees();
        })
        .then((res) => {
          dispatch(setProfile(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessAddEmployee(err.response.data.message);
        });
    }
  }

  const updateEmployeeHandler = (employee) => {
    if(employee) {
      setLoading(true);
      updateEmployee(employee)
        .then((res) => {
          setSuccessUpdateEmployee('Employee updated Successfully');
        })
        .then(() => {
          return getEmployees();
        })
        .then((res) => {
          dispatch(setProfile(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessUpdateEmployee(err.response.data.message);
        });
    }
  }

  const deleteEmployeeHandler = (employeeId) => {
    if(employeeId) {
      setLoading(true);
      deleteEmployee(employeeId)
        .then((res) => {
          setSuccessDeleteEmployee('Employee deleted Successfully');
        })
        .then(() => {
          return getEmployees();
        })
        .then((res) => {
          dispatch(setProfile(res.data));
        })
        .then(() => {
          history.push('/dashboard')
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setSuccessDeleteEmployee(err.response.data.message);
        });
    }
  }

  const openNewEmployeeModal = () => {
    setAddEmployee(true);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="dashboard">

      <AddEmployeeModal 
        show={addEmployee}
        handleClose={() => setAddEmployee(false)}
        addEmployee={addEmployeeHandler}
      />

      <TopBar />

      <div className="employee-list-container">
        <div className="list-header">
            <h2>Employees</h2>
            <button onClick={openNewEmployeeModal}>Add New Employee</button>
        </div>

        <EmployeeList 
          files={profiles.employee}
          updateEmployee={updateEmployeeHandler}
          deleteEmployee={deleteEmployeeHandler}
        />
      </div>

    </div>
  );
}

export default DashboardScreen;
