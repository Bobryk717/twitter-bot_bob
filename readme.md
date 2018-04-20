# yoruba name bot
this application tweets a random name from the [yorubaname](http://www.yorubaname.com/) website using the [yorubaname api endpoints](http://www.yorubaname.com/swagger-ui.html#!/name-api/getNameUsingGET)

## installation
* this program was written in nodejs
* use a terminal
* install nodejs `brew install node`
* install dotenv package `npm install dotenv --save`
* install twitter package `npm install twitter`
* install cron package `npm install cron`


### cloning the code
* to copy the project on your computer, open your terminal and do this: [git clone](https://github.com/afope/yorubanamebot.git) e.g $ `git clone <remote repo> <repo name>`
* you will find the **remote repo** link above by clicking on the green *"clone or download"* option in tab above the repository
* then run `cd <repo name>` in your terminal (*<repo name>* is whatever name you gave your repository in the terminal)
* this should open up the folder you just cloned from github
* open up your code editor


## usage
### running the code

to run the code run the following commands in your terminal:
* after you download the code, run `node app.js` in your terminal

## customize bot instance
### script mode
Yorubaname bot runs in script mode by default. This means it will run once and exit, like any normal script.

### bot mode
In bot mode, Yorubaname bot will run the tweet script once per specified duration.
To specify bot duration, set environment variable `TWEETER_CRON_DURATION_HRS`.
If no duration is specified, the app will run in script mode.

## contribution
it's a twitter bot, you can try to implement it too.

## licensing
this code follows the [mit license](https://github.com/angular/angular.js/blob/master/LICENSE)
