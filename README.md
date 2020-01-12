# How to create server Nodejs with express and mongoose

1- Npm init
2- npm i express mongoose
3- npm i --save-dev nodemon

## Create server for API

In nodejs with Express you can create server is easy, only need this several lines code:

```js
const express = require('express');

// create the server
const app = express();

// Port and run
app.listen(4000, () => {
    console.log("server run");
})
```

## Connect the MongoDB / mongoose

First import Mongoose in nodejs>

```js
const mongoose = require('mongoose');
```

Second you need connect with you database in mongoose>

```js
//Connect Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hospital', {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
```

## Create Models for you database

The models interact with the database, sending, deleting records:

First we import mongoose and Schema (It serves to create the structure of the data) 
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```

Second, we create our scheme for our patients>
(trim is to eliminate the spaces)

```js 
const patientsSchema = new Schema({
    nombre: {
        type: String,
        // trim delete spaces in white
        trim: true
    },
    owner: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    hour: {
        type: String,
        trim: true
    },
    symptoms: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Patients', patientsSchema);
```

## Create controllers

## Create routing in nodejs 