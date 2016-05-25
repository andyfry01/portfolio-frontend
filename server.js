require('dotenv').config()
var express = require('express');
var PORT = 31415;
var app = express();

app.use(express.static('./public'))

app.listen(PORT, function(){
  console.log("server running on port", PORT);
})
