import React, {useCallback, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import Description from '../../components/Description';
import TextInput from '../../components/TextInput';

// import LoginWave from '../../assets/images/login-wave.png';
// import LoginBackground from '../../assets/images/login-background.png';

import './styles.scss';
import {getEmployees, createManager, setToken} from '../../utils/service';
import {validateEmail} from '../../utils/string';
import {useDispatch} from 'react-redux';
import {setProfile} from '../../store/user/actions';

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Login Click Handler
  const handleSignupClick = useCallback(
    (event) => {
      if (event) event.preventDefault();
      setLoading(true);
      setError('');
      createManager(email, password, firstName, lastName)
        .then((res) => {
          setToken(res.data.token);
        })
        .then(() => {
          history.push('/');
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
    [email, password, firstName, lastName, history],
  );

  // Login by pressing enter enabled
  const handleKeyPress = (e) => {
    if (e.key !== undefined && e.key === 'Enter') {
      handleSignupClick(null);
    }
  };

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
        <div className="error-message">{error !== '' ? error : ''}</div>
        <div className="terms-conditions-wrapper">
          <p>By clicking on sign up button, I agree to the terms of service</p>
        </div>
        <button onClick={handleSignupClick} disabled={!validateEmail(email)}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Sign Up'}
        </button>

        <p className="registered">Already have account? <a href="/">Login</a> here</p>
      </div>
    </div>
  );
}

export default SignUpScreen;
