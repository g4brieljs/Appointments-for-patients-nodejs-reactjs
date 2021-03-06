const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientsSchema = new Schema({
    name: {
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