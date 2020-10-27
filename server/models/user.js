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
  voivodeship: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  district: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  community: {
    type: String,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  city: {
    type: String,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  street: {
    type: String,
    minLength: 3,
    maxLength: 100,
    lowercase: true,
  },
  number: {
    type: Number,
  },
  // zipcode: {
  //   type: String,
  //   required: true,
  //   length: 6,
  // },

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
    voivodeship: req.voivodeship,
    district: req.district,
    community: req.community,
    city: req.city,
    street: req.street,
    number: req.number,
    // zipcode: req.zipcode,
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
    email: Joi.string().min(5).max(80).email().required(),
    voivodeship: Joi.string().min(2),
    district: Joi.string().min(2),
    community: Joi.string().min(2),
    city: Joi.string().min(2),
    street: Joi.string().min(2),
    number: Joi.number(),
    // zipcode: Joi.string()
    //   .regex(/^[0-9]{2}-[0-9]{3}$/)
    //   .required(),
  });
  return (validation = schema.validate(user));
}

exports.User = User;
exports.validate = validateUser;
exports.createUser = createUser;
