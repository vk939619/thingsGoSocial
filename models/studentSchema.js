const mongoose = require('mongoose');


var studentSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    contact: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    //type of class can be string or number according to ui/ux requirements
    class: {
        type: Number,
            required: true
    },
    //if user enters multiple subjects than we will split that string and store that into an array so that we can easily iterate through it
    subjects: {
        type: []
    },
    //if user enters multiple socities than we will split that string and store that into an array.
    socities: {
        type: []
    },
    year: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema);