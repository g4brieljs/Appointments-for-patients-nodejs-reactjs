const express = require('express');
const mongoose = require('mongoose');

// create the server
const app = express();

//Connect Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hospital', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Port and run
app.listen(4000, () => {
    console.log("server run in port 4000");
})