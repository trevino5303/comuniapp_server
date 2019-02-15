const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let teamSchema = new Schema({
    name: {type: String, required: true, max: 20},
    
});