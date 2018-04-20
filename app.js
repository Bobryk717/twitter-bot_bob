// load env variables
  require('dotenv').config();

// get cron duration
  var cron_duration_hrs = parseInt( process.env.TWEETER_CRON_DURATION_HRS );

if( cron_duration_hrs ){
  console.log( 'cron duration detected. running in cron mode' );
  require('./components/cron');
}

else {
  console.log( 'cron duration not detected. running as one-time script' );
  require('./components/tweeter')();
}