/**
 * API utilities for
 * fetch requests to be made
 */
import Axios from 'axios';
// import moment from 'moment';

// HTTP instance
// Inject backend URL when to connect with real backend
const HttpInstance = Axios.create({
  baseURL: 'http://localhost:8080',
});

// Get config
function getConfig() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
}

// Set auth token
export function setToken(token) {
  localStorage.setItem('token', token);
}
// check for authentication
export function isAuthenticated() {
  if (localStorage.getItem('token')) {
    return true;
  }

  return false;
}

// login using email ID and password
export function login(username, pass) {
  return HttpInstance.post(
    '/auth/login',
    {
      email: username,
      password: pass,
    },
  );
}

// Create Employee
export function createEmployee(employee) {
  return HttpInstance.post(
    '/register/createEmployee',
    {
      email: employee.email,
      password: employee.password,
      firstName: employee.firstName,
      lastName: employee.lastName,
      company: 'DUMMY',
      address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      city: 'DUMMY',
      country: 'DUMMY',
      state: 'DUMMY',
      zipCode: '12456',
      mobile: '7209348092',
      dob: '28/12/1997'
    },
    getConfig()
  );
}

// Update Employee
export function updateEmployee(employee) {
  return HttpInstance.put(
    `/updateEmployee/${employee.id}`,
    {
      email: employee.email,
      password: employee.password,
      firstName: employee.firstName,
      lastName: employee.lastName,
      company: 'DUMMY',
      address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      city: 'DUMMY',
      country: 'DUMMY',
      state: 'DUMMY',
      zipCode: '12456',
      mobile: '7209348092',
      dob: '28/12/1997'
    },
    getConfig()
  );
}

// Delete Employee
export function deleteEmployee(employeeId) {
  return HttpInstance.delete(
    `/deleteEmployee/${employeeId}`,
    getConfig()
  );
}

// get all employees details
export function getEmployees() {
  return HttpInstance.get('/getEmployee', getConfig());
}

// get user related stats
// export function getStats() {
//   return HttpInstance.get('/stats', getConfig());
// }

// get files
// export function getFiles(skip: number, limit: number, filter: string) {
//   if(filter === 'ALL'){
//     filter = ''
//   } else if(filter === 'REVIEWED'){
//     filter = 'COMPLETED'
//   }
//   return HttpInstance.get(
//     `/files?page=${skip}&pageSize=${limit}&status=${filter}`,
//     getConfig(),
//   );
// }

// Post File | Upload File
// export function postFile(formData:object) {
//   return HttpInstance.post(`/files`, formData, getFileConfig());
// }

// get file details
// export function getFileDetails(fileId: string) {
//   return HttpInstance.get(`/files/${fileId}`, getConfig());
// }

// delete file
// export function deleteFile(fileId: string) {
//   return HttpInstance.delete(`/files/${fileId}`, getConfig(),);
// }

// get file data
// export function getFileData(
//   fileId: string,
//   page: number,
//   pageSize: number,
//   filter: string,
//   sortBy: string,
//   sortOrder: string
// ) {
//   let voted = false;
//   let url = '';
//   if(filter === 'ALL'){
//     url = `/files/${fileId}/data?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
//   }
//   else {
//     voted = filter === 'VOTED' ? true : false;
//       url = `/files/${fileId}/data?page=${page}&pageSize=${pageSize}&voted=${voted}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
//   }
//   return HttpInstance.get(
//     url, getConfig()
//   );
// }

// type interface for downvoting a record
// interface DownvotePayload {
//   childId: string;
//   reasonText: string;
//   reasonCategory: string;
// }

// downvote a record
// export function downvoteRecord(fileId: string, payload: DownvotePayload) {
//   return HttpInstance.post(`/data/${fileId}/downvote`, payload);
// }

// post a comment
// export function postComment(dataid: string, message: string) {
//   return HttpInstance.post(`/data/${dataid}/comment`, {
//     "text": message,
//   }, getConfig(),)
// }

// get validators list
// export function getValidators(fileId: string) {
//   return HttpInstance.get(`/files/${fileId}/validators`, getConfig());
// }

// delete validators
// export function deleteValidators(fileId: string, userId: string) {
//   return HttpInstance.delete(`/files/${fileId}/validators/${userId}`, getConfig(),);
// }

// Mark File as Complete
// export function postComplete(fileId: string) {
//   return HttpInstance.post(`/files/${fileId}/complete`, {}, getConfig(),)
// }

// Validator vote for one row of data
// export function postVote(dataId: string, voteType: boolean, downVoteComment: string, downVoteReason: string) {
//   return HttpInstance.post(`/data/${dataId}/vote`, {
//     "voteType": voteType,
//     "downVoteComment": downVoteComment,
//     "downVoteReason": downVoteReason
//   }, getConfig())
// }

// export function postBulkVote(fileId: string, vote: boolean, dataIds: any[]) {
//   return HttpInstance.post(`/files/${fileId}/vote`, {
//     "vote": vote,
//     "dataIds": dataIds
//   }, getConfig())
// }

// assign validators
// export function assignValidators(fileId: string, validators: any[], deadline: moment.Moment, time: moment.Moment) {
//   return HttpInstance.post(`/files/${fileId}/validators`, {
//     "validators": validators.map((validator, index) => {
//       return validator.id
//     }),
//     "dueTimestamp": deadline.format('YYYY-MM-DD')+'T'+time.format('hh:mm')
//   }, getConfig());
// }

// get notifications
// export function getNotifications(skip: number, limit: number) {
//   return HttpInstance.get(`/notifications?page=${skip}&pageSize=${limit}`, getConfig());
// }

// read notification
// export function readNotification(notificationId: string) {
//   return HttpInstance.post(`/notifications/${notificationId}/read`, {}, getConfig(),);
// }
