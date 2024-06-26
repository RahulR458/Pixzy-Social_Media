const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  emailOrPhone: {
    type: String,
    required: [true, "Email or Phone number is required"],
    unique: true,
    validate: {
      validator: function (value) {
        return (
          validator.isEmail(value) || validator.isMobilePhone(value, "any")
        );
      },
      message: "Please provide a valid email or phone number",
    },
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  userName: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "Password is required"],
    select: false,
  },
});

module.exports = {
  Users: mongoose.model("Users", userSchema),
};