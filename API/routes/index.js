const express = require('express');
const router = express.Router();
const patientsControllers = require('../controllers/patientsControllers');


module.exports = function(){


    // Add new patients from POST
    router.post('/patients',
        patientsControllers.newPatients
    )

    // Get the all records from DB
    router.get('/patients',
        patientsControllers.getPatients
    )

    // Get a patients for id
    router.get('/patients/:id',
        patientsControllers.getPatient
    )

    // Update register with ID
    router.put('/patients/:id',
        patientsControllers.updatePatient
    )

    // Delete patient for ID
    router.delete('/patients/:id',
        patientsControllers.deletePatient
    )


    return router;
}