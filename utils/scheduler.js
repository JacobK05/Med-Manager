const schedule = require('node-schedule');
const sendMail = require('./smtp')

const job = schedule.scheduleJob(' */1 * * * *', function(){


const recipientEmail= "teddyassef23@gmail.com";
const subject= " test";
const message = "test ";

sendMail(recipientEmail, subject, message);
  console.log('The answer to life, the universe, and everything!');
});

module.exports = job;