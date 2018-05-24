
var moment = require('moment');

var time = 1527126004569;
var natural = moment('5/28/2018');

console.log(moment(time, 'x').isValid());
console.log(time);
console.log(moment(time, 'x').format('MMMM D, YYYY'));

console.log(moment(natural).isValid());
console.log(moment(natural).format('MMMM D, YYYY'));
console.log(moment(natural).format('x'));
