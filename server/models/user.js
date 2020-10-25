const mongoose = require('mongoose');
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
    minlength: 2,
    maxlength: 40,
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
    // required: true,
    minLength: 3,
    maxLength: 30,
  },
  city: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
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

  const result = await user.save();
  res.send(user);
  return result;
}

exports.createUser = createUser;
