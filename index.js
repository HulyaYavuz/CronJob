//const express = require('express');
const axios = require('axios');
// //

var CronJob = require('cron').CronJob;

new CronJob(
  '31 23 * * *', // 0 10 * * *
  function () {
    return axios.post('https://workforce.unitebt.com:45127/birthday');
  },
  null,
  true,
  'Europe/Istanbul'
);

// app.listen(8090, function () {
//   console.log('port: 8090');
// });
