var dorita980 = require('dorita980');

var myRobotViaLocal = new dorita980.Local('48320D0679984D99A2B2754B28817030', ':1:1623953175:HCpaOKL9yu908Bsv', '192.168.1.49'); // robot IP address

myRobotViaLocal.on('connect', init);

function init () {
  myRobotViaLocal.clean()
  .then(() => myRobotViaLocal.end()) // disconnect to leave free the channel for the mobile app.
  .catch(console.log);