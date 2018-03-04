// require .env packacge
require("dotenv").config();

// require twitter package
var TwitterPackage = require("twitter");

// twitter api keys
var secret = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

// make a new twitter object that takes in the api keys
var Twitter = new TwitterPackage(secret);

// get reques to yoruba names api
const http = require("http");
const url =
  "http://www.yorubaname.com/v1/names?page=26";
http.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);

    // pick a random name from JSON repsonse
    var randomName = body[Math.random() * body.length | 0];
    // create link for random name
    var linkBack = "http://www.yorubaname.com/entries/" + randomName["name"];
    console.log(randomName["name"]+ "\n" + randomName["meaning"] + "\n" + linkBack);


    //posting to twittee
    Twitter.post("statuses/update", {status:randomName["name"]+ "\n" + randomName["meaning"] + "\n" + linkBack},  function(error, tweet, response){
        if(error){
           console.log(error);
          }
       console.log(tweet);  // Tweet body.
       console.log(response);  // Raw response object.
       });

  });
});
