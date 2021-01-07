import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import Description from '../../components/Description'
import Checkbox from '../../components/Checkbox';
import TextInput from '../../components/TextInput';

// import LoginWave from '../../assets/images/login-wave.png';
// import LoginBackground from '../../assets/images/login-background.png';

import './styles.scss';
// import {getProfile, login, setToken} from '../../utils/service';
import {validateEmail} from '../../utils/string';
import {useDispatch} from 'react-redux';
// import {setProfile} from '../../store/user/actions';

/**
 * SignUp Screen
 * @constructor
 */
function SignUpScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
//   const {t} = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Login Click Handler
  const handleLoginClick = useCallback(
    // (event: any) => {
    //   if (event) event.preventDefault();
    //   setLoading(true);
    //   setError('');
    //   login(email)
    //     .then((res) => {
    //       setToken(res.data.accessToken);
    //     })
    //     .then(() => {
    //       return getProfile();
    //     })
    //     .then((res) => {
    //       dispatch(setProfile(res.data));
    //     })
    //     .then(() => {
    //       history.push('/dashboard');
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       if(err.response.status === 401) {
    //         setError('Invalid email address. Please try again.');
    //       }
    //       else {
    //         setError(err.response.data.message);
    //       }
    //     });
    // },
    // [email, history, dispatch],
  );

  // Login by pressing enter enabled
//   const handleKeyPress = (e: any) => {
//     if (e.key !== undefined && e.key === 'Enter') {
//       handleLoginClick(null);
//     }
//   };

  return (
    <div className="login-container">
      <Description />
      <div className="login-card">
        <h1>Sign Up</h1>
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
        <div className="password-container">
          <div className="label">Password</div>
          <TextInput
            type="password"
            placeholder="Password here ...."
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            // onKeyDown={handleKeyPress}
          />
        </div>
        <div className="error-message">{error !== '' ? error : ''}</div>
        <div className="terms-conditions-wrapper">
          <p>By clicking on sign up button, I agree to the terms of service</p>
        </div>
        <button onClick={handleLoginClick} disabled={!validateEmail(email)}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default SignUpScreen;
