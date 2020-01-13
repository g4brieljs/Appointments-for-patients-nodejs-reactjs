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

```js
// req> request / res> respond / next> next
// When create new patients
exports.newPatients = (req, res, next) => {
    // All : insert in the data base

    // Send respond a the API
    res.json({ message: 'The patients was added properly'});

}
```


## Create routing in nodejs 

First we import express and router

Second you need add our controllers, and send data through method POST

```js
const express = require('express');
const router = express.Router();
const patientsControllers = require('../controllers/patientsControllers');


module.exports = function(){

    // Add new patients from POST
    router.post('/patients',
        patientsControllers.newPatients
    )


    return router;
}
```

Later add Routing in index.js of our server with nodejs

```js
// Add routing
app.use('/', routes());
```


# Send request to the server and Read the request with BodyParser

With Postman you can acces in the url localhost:4000/patients

For read the request you need body-parser>

With post man send the request, in the controller you only write `console.log(req.body);`

# Save date in database, add models

First you need add the models
```js
const Patients = require('../models/Patients');
```

Second save the models in the mongodb
```js
// Create the object with date of patients from req.body
    const  patients = new Patients(req.body);

    try {
        await patients.save();   
        // Send respond a the API
        res.json({ message: 'The patients was added properly'});
        
    } catch (error){
        console.log(error);
        // with next, is for pass the next function
        next();
    }
```

# Get the records

First in the routing>
```js
// Get the all records from DB
    router.get('/patients',
        patientsControllers.getPatients
    )
```

Second add controller>
```js
// Get all Patients

exports.getPatients = async (req, res, next) => {

    try{

        const patients = await Patients.find({});
        res.json(patients);

    }catch (error){
        console.log(error);
        next();
    }

}
```

## Get record for id

```js
// Get Patient for ID

exports.getPatient = async (req, res, next) => {

    try{

        const patient = await  Patients.findById(req.params.id);
        res.json(patient);

    }catch (error){
        console.log(error);
        next();
    }

}
```

# Update a records

```js
// Update register with ID
exports.updatePatient = async (req, res, next) => {

    try{
        const patient = await Patients.findOneAndUpdate({_id : req.params.id}, req.body, {
            new : true
        });
        res.json(patient);
    }catch (error){
        console.log(error);
        next();
    }

}
```

# Delete a record


