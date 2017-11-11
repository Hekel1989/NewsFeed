var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var fs = require('fs');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
//Using the npm Request module to handle HTTP requests
  request('https://newsapi.org/v1/sources',
    function(error, response ,body){
        console.log('error', error);
        console.log('Status Code: ', response && response.statusCode);
        console.log('body: ', body);
        //the JSON result now needs parsing so that it cant be displayed on the client
        JSON.parse(body);
        //res.json is used to send json to the client (when it is on the console it's on the server, if it's on the inspector then it is on the client)
        res.json(body);
    });
});

module.exports = router;
