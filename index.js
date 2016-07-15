
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var getIP = require('ipware')().get_ip;
// process.env.TEST_VR = 'testvr';
app.get('/',function (req,res) {
  res.send('This is Request Header Parser Microservice API. Use GET request <code>/api/whoami</code> to get simple user information like <ul><li>User IP</li><li>Language</li><li>Software</li></ul>')
  var testlocalvar = process.env.TEST_VR;
  console.log(testlocalvar);
});
app.get('/api/whoami',function(req, res) {
  var cryptObj = {};
  var language = req.headers['accept-language'];
  var software = req.headers['user-agent'];
  var ipInfo = getIP(req);

  software = software.match(/\((.*?)\)/)[1];
  language = language.substr(0,language.indexOf(','));

  cryptObj['ip'] = ipInfo.clientIp;
  cryptObj['language'] = language;
  cryptObj['software'] = software;
  res.json(cryptObj);
});
app.listen(port,function() {
  console.log('Server on port: ', port);
});
