// load env variables
require('dotenv').config();

var initializeBot = require('./tweeter.js');
var CronJob = require('cron').CronJob;
var cronDurationHours = parseInt( process.env.TWEETER_CRON_DURATION_HRS ) || 6;

var cronOptions = {
    cronTime: "0 */"+ cronDurationHours +" * * *",
    onTick: initializeBot,
    start: true,
    runOnInit: true,
    onComplete: () => console.log('Fin... Next post is in '+ cronDurationHours +' hours:)'),
    timeZone: 'Africa/Lagos'
};

let job = new CronJob(cronOptions);
console.log( '[cron] will run tweeter every ' + cronDurationHours + ' hours' );
