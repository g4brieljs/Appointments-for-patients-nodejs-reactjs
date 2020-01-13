const Patients = require('../models/Patients');


// req> request / res> respond / next> next
// When create new patients
exports.newPatients = async (req, res, next) => {
    // All : insert in the data base



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


}


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

//  Delete register with ID
exports.deletePatient = async (req, res, next) => {

    try{
        
        await Patients.findOneAndDelete({_id : req.params.id});
        res.json({message : 'The Patient was eliminated'});
    }catch (error){
        console.log(error);
        next();
    }

}