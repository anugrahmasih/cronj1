//import database
const mangoose = require('mongoose')

//create models now
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    tech: {
        type: String,
        required:true
    },

    sub: {
        type: Boolean,
        required: true,
        default:false
    }
})

//import database schema here vvi
module.exports = mongoose.model('Alien', alienSchema)