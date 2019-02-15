const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//TODO: complete the schema

let CaminanteSchema = new Schema({
    name: {type: String, required: true, max: 100},
    //team: {}
    address: {type: String, required: true, max: 200},
    phone: {type: String, required: true, max: 10},
    age: {type: Number, required: true},

});
 module.exports = mongoose.model('Caminante', CaminanteSchema);