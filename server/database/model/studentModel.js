const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email_id: String,
    is_paid: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Student', studentSchema);