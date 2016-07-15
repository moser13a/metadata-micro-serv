
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var multer = require('multer');
var upload = multer({dest:'uploads/'});
app.set('view engine', "ejs");



app.get('/',function (req,res) {

  res.render('index');

});
app.post('/api/upload',upload.single('filename'),function(req, res) {
  res.render('success',{data:req.file});
});
app.listen(port,function() {
  console.log('Server on port: ', port);
});
