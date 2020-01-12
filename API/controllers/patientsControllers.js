

// req> request / res> respond / next> next
// When create new patients
exports.newPatients = (req, res, next) => {
    // All : insert in the data base

    // Send respond a the API
    res.json({ message: 'The patients was added properly'});

}