// import {Moment} from 'moment';

// returns boolean
// Checks whether email is valid or not
export function validateEmail(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return true;
  }
  return false;
}

// generate a random color from the spectrum
// export function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// Get a time difference string with
// different strings for difference
// greater than 7 days. Also omit values if
// are 0
// export function getTimeDiff(start: Moment, end: Moment): string {
//   let ret = [];
//   if (Math.abs(start.diff(end, 'days')) > 0) {
//     if (Math.abs(start.diff(end, 'days')) >= 7) {
//       return end.format('MM/DD/yy hh:mm A');
//     } else {
//       ret.push(`${Math.abs(start.diff(end, 'days'))}D`);
//       if (Math.abs(start.diff(end, 'hours')) % 24 !== 0) {
//         ret.push(`${Math.abs(start.diff(end, 'hours')) % 24}H`);
//       }
//     }
//   } else {
//     if (Math.abs(start.diff(end, 'hours')) > 0) {
//       ret.push(`${Math.abs(start.diff(end, 'hours'))}H`);
//       if (Math.abs(start.diff(end, 'minutes')) % 60 !== 0) {
//         ret.push(`${Math.abs(start.diff(end, 'minutes')) % 60}M`);
//       }
//     } else {
//       if (Math.abs(start.diff(end, 'minutes')) > 0) {
//         ret.push(`${Math.abs(start.diff(end, 'minutes'))}M`);
//       }
//     }
//   }
//   return ret.join(' ');
// }

// Generates a regex for fuzzy searching a query in an array of strings
export const getRegex = (query) => {
  const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  const reHasRegExpChar = RegExp(reRegExpChar.source);
  const escapeRegExp = (s) =>
    reHasRegExpChar.test(s) ? s.replace(reRegExpChar, '\\$&') : s;
  return new RegExp(query.split('').map(escapeRegExp).join('.*'), 'i');
};
