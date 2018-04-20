var initializeBot = require('./app.js');
var CronJob = require('cron').CronJob;

var cronOptions = {
    cronTime: "0 */6 * * *", // Every 6 hours.
    onTick: initializeBot,
    start: true,
    runOnInit: true,
    onComplete: () => console.log('Fin... Next post is in 6 hours:)'),
    timeZone: 'Africa/Lagos'
};

let job = new CronJob(cronOptions);
