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
import {createEmployee} from '../../utils/service'
// import Stats from './Stats';
// import {setStats} from '../../store/user/actions';
// import {RootState} from '../../store';
import {isAuthenticated} from '../../utils/service';

import './styles.scss';
// import {appendFiles, setFiles} from '../../store/dashboard/actions';
import {Row, Spinner, Col} from 'react-bootstrap';

/**
 * Dashboard Screen
 * @constructor
 */
function DashboardScreen() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);
  const [successAddEmployee, setSuccessAddEmployee] = useState(false);

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

  let filterOptions;

  const employees = [
    {
      id: "1",
      email: "ananya.sharma@wipro.com",
      firstName: "Ananya",
      lastName: "Sharma",
      company: "Wipro",
      dob: "28/11/1997",
      address: "Kaafi Ajeeb si Jagah, Pin - Pata Nahi, Bhilwara",
    },
    {
      id: "2",
      email: "kratika.khandelwal@wipro.com",
      firstName: "Kratika",
      lastName: "Khandelwal",
      company: "Wipro",
      dob: "30/07/1997",
      address: "Kaafi Ajeeb si Jagah, Pin - Pata Nahi, Delhi",
    },
    {
      id: "3",
      email: "shreya.agnihotri@wipro.com",
      firstName: "Shreya",
      lastName: "Agnihotri",
      company: "Wipro",
      dob: "No Idea",
      address: "Kaafi Ajeeb si Jagah, Pin - Pata Nahi, Pune",
    }
  ]

    // Redirect if not authenticated
    if (!isAuthenticated()) {
      history.push('/');
    }

  const addEmployeeHandler = (employee) => {
    console.log(employee);
    if(employee) {
      setLoading(true);
      createEmployee(employee)
        .then((res) => {
          console.log(res);
          setSuccessAddEmployee(true);
        })
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
      {/* {role !== 'ADMIN' ? <Stats /> : null} */}

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

        <EmployeeList files={profiles.employee}/>
      </div>

    </div>
  );
}

export default DashboardScreen;
