const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

// create the server
const app = express();

//Connect Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hospital', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Add routing
app.use('/', routes());
// Add middleware


// Port and run
app.listen(4000, () => {
    console.log("server run in port 4000");
})