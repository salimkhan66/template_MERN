const mongoose = require("mongoose");
const User = require("./user");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },

      user_Id:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:User
      }
 
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
