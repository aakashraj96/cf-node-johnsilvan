// Part of https://github.com/chris-rock/node-crypto-examples

// Nodejs encryption with CTR

http  = require("http")
cfenv = require("cfenv")

var express = require('express');
var app = express();





app.get('/', function (req,res) {
    var arr =  [
	{
    id : 0001,
    serviceType : "1",
    time: 11
  }
,
  {
     id : 0002,
    serviceType : "7",
    time: 07
  }
,
  {
     id : 0003,
    serviceType : "5",
    time: 16
  }
,
  {
     id : 0004,
    serviceType : "3",
    time: 06
}
].sort(function(obj1, obj2) {
	// Ascending: first age less than the previous
	return obj1.time - obj2.time;
});
res.send(arr);
});


// get environmental information for this app
appEnv   = cfenv.getAppEnv()
instance = appEnv.app.instance_index || 0



// start the server on the calculated port and host


var server = app.listen(appEnv.port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
