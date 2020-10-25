const mongoose = require('mongoose');
const Joi = require('joi');
const { getCoordinates } = require('../routes/getCoordinates');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
  },
  surname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 80,
    unique: true,
  },
  // voviodeship: {
  //   type: String,
  //   required: true,
  // },
  // district: {
  //   type: String,
  //   required: true,
  // },
  number: {
    type: Number,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
    length: 6,
  },
  street: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  coords: {
    type: Array,
  },
});

const User = mongoose.model('User', userSchema);

async function createUser(req, res) {
  let coordinates = [];
  await getCoordinates(req, res).then(function (result) {
    coordinates.push(result);
  });

  const user = new User({
    name: req.name,
    surname: req.surname,
    email: req.email,
    number: req.number,
    zipcode: req.zipcode,
    street: req.street,
    city: req.city,
    coords: coordinates,
  });

  try {
    const result = await user.save();
    console.log(result);
    res.send(user);
  } catch (ex) {
    console.log(ex.message);
  }
}

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(40).required(),
    surname: Joi.string().min(2).max(40).required(),
    name: Joi.string().min(2).max(40).required(),
    email: Joi.string().min(5).max(80).email().required(),
    number: Joi.number(),
    zipcode: Joi.string()
      .regex(/^[0-9]{2}-[0-9]{3}$/)
      .required(),
    street: Joi.string().min(3).max(100),
    city: Joi.string().min(3).max(100),
  });
  validation = schema.validate(user).error;
}

exports.User = User;
exports.validate = validateUser;
exports.createUser = createUser;
