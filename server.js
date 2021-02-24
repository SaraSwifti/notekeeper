 //dependencies
 const express = require('express');
 const path = require('path');
 const fs = require('fs');

 //initialize express app
 const app = express();
 var PORT = process.env.PORT || 8080;

 //set-up data parsing
app.use(express.urlencoded({ extended: true}));

 
// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname));
require('./Develop/routing/api_routes.js')(app);


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});