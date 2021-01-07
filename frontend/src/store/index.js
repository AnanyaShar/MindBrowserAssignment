import {combineReducers, createStore} from 'redux';

import {userReducer} from './user/reducers';
// import {detailsReducer} from './details/reducers';
// import {dashboardReducer} from './dashboard/reducer';

// Combine all reducers to be injected into redux store
const rootReducer = combineReducers({
  user: userReducer,
//   details: detailsReducer,
//   dashboard: dashboardReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
