// ---- LOAD MODULES
var express = require('express');

// --- INSTANTIATE APP
var app = express();

// --- STATIC MIDDLEWARE

// --- ROUTING

//when someone navigates to the default url, display test.html
app.get('/', function(request, response){
	response.render('test.html')
})

// --- START THE SERVER
var server = app.listen(process.env.PORT, function(){
	console.log('Listening on port %d', server.address().port)
})