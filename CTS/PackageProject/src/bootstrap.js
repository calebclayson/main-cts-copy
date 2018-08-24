import moment from 'moment';

const birthday = moment('2001-04-27', 'YYYY-MM-DD');

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(birthday.fromNow());

console.log(birthday.format('dddd'));

console.log(sixMonthsAgo.toString());