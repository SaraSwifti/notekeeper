 var bodyParser = require('body-parser');
 const express = require('express');
 var path = require('path');
 const app = express();
 var PORT = process.env.PORT || 8080;

 //body parser api call
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());
 
require('./Develop/routing/api_routes.js')(app);
require('./Develop/routing/html_routes.js')(app);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});