import moment from 'moment';
var math = require('mathjs');

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date);

var result = math.round(math.e, 3);
console.log(result);

// ==== ES6 Code to Demo
var name = "Tony";
var time = "today";

console.log(`Hi ${name}, how are you doing ${time}?`);