const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true, // Ensure this field is required
    unique: true, // Ensure uniqueness
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static signup method
userSchema.statics.signup = async function (username, email, password) {
  // Validator
  if (!username || !email || !password) {
      throw Error('All fields must be filled');
  }

  const userExists = await this.findOne({ username });
  if (userExists) {
      throw Error('Username already in use');
  }

  const emailExists = await this.findOne({ email });
  if (emailExists) {
      throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};
// Static login method
userSchema.statics.login = async function (email, password) {
  console.log("Login function called"); // Log function call

  if (!email || !password) {
    console.log("Missing fields:", { email, password });
    throw Error("All fields must be filled");
  }

  console.log("Searching for user with email:", email);
  const user = await this.findOne({ email });

  if (!user) {
    console.log("No user found with email:", email);
    throw Error("Incorrect email");
  }

  console.log("Comparing passwords");
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    console.log("Password mismatch for user:", email);
    throw Error("Incorrect password");
  }

  console.log("Login successful for user:", email);
  return user;
};

module.exports = mongoose.model("User", userSchema);
