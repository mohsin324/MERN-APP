const mongoose = require('mongoose');
const schema = mongoose.Schema({
    reps: {
        required: true,
        type: Number
    },
    weight: {
        required: true,
        type: Number
    },
    workout:{
        required: true,
        type: String
    },
    user_id: {
        required: true,
        type: String
    }
})

const mongoDBSchema = mongoose.model('MERN-PROJ-1', schema);
module.exports = mongoDBSchema