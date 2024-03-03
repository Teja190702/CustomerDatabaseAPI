const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:false
  },
  age: {
    type: Number,
    required: true,
    unique:false
  },
  number: {
    type: String,
    required: true,
    unique:false
  },
  location:{
    type:String,
    required:false,
    unique:false
  },
  createdAt:{
    type:Date,
    default: Date.now
  },
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
