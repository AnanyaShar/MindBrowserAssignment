import React, {useEffect, useState} from 'react';
import {Nav} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import Avatar from '../Avatar';
// import {RootState} from '../../store';
// import {getRandomColor} from '../../utils/string';
// import {getNotifications, getProfile} from '../../utils/service';
// import {setNotifications, setProfile} from '../../store/user/actions';

import CarrotDown from '../../assets/images/arrow.png';
import Logo from '../../assets/svg/mindbowser-logo.svg';
import LogOut from '../../assets/svg/logout.svg';
// import Command from '../../assets/images/command.png';
// import Upload from '../../assets/svg/upload.svg';

import './styles.scss';

const {Item: NavItem} = Nav;

/**
 * Top Bar Component
 * @constructor
 */
function TopBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {pathname} = useLocation();

  // Imported User Details, notifications from redux store
//   const {name, role, imageUrl, notifications} = useSelector(
//     (state) => ({
//       name: state.user.profile.name,
//       role: state.user.profile.role,
//       imageUrl: state.user.profile.imageUrl,
//       notifications: state.user.notifications,
//     }),
//     shallowEqual,
//   );

  // Get information on load
//   useEffect(() => {
//     if (pathname !== '/login') {
//       Promise.all([getProfile(), getNotifications(1, 6)]).then((res) => {
//         dispatch(setProfile(res[0].data));
//         dispatch(setNotifications(res[1].data.notifications));
//       });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch]);

  return (
    <div className="nav-container">
      <Nav defaultActiveKey="/" as="ul" className="navbar">
        <NavItem as="li">
          <img className="topbar-logo" src={Logo} alt="logo" />
        </NavItem>
        {pathname !== '/' ? (
          <NavItem as="li" className="topbar-mid">
            <div
              className={[
                'bar-tab',
                pathname === '/dashboard' ? 'bar-tab-active' : '',
              ].join(' ')}
              onClick={() => {
                if (pathname !== '/dashboard') history.push('/dashboard');
              }}>
              {'Dashboard'}
            </div>
          </NavItem>
        ) : null}
        <NavItem as="li" className="nav-item-custom">
          {pathname !== '/' ? (
            <>
                    <Avatar
                    //   src={`${imageUrl}?b=%23${getRandomColor()}`}
                      name="John Doe"
                    />
                    <img
                      src={LogOut}
                      className="topbar-logout"
                      alt="logout"
                    />
                </>
          ) : (
            <span className="topbar-login">Login</span>
          )}
          {/* Locale Selector */}
        </NavItem>
      </Nav>
    </div>
  );
}

export default TopBar;
