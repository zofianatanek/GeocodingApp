const mongoose = require('mongoose');
const axios = require('axios');

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
  coordX: {
    type: String,
  },
  coordY: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

async function fetchData(req, res) {
  let data = {
    reqs: [
      {
        pkt_numer: `${req.number}`,
        pkt_kodPocztowy: `${req.zipcode}`,
        ul_pelna: `${req.street}`,
        miejsc_nazwa: `${req.city}`,
      },
    ],
    useExtServiceIfNotFound: true,
  };
  let url = 'https://testcapap.gugik.gov.pl/api/fts/gc/pkt';

  await axios.post(url, data).then(function (response) {
    const data = response.data[0].single.geometry.coordinates;
    console.log(data);
  });
}

async function createUser(req, res) {
  const user = new User({
    name: req.name,
    surname: req.surname,
    email: req.email,
    number: req.number,
    zipcode: req.zipcode,
    street: req.street,
    city: req.city,
  });

  const result = await user.save();
  res.send(user);
  return result;
}

exports.createUser = createUser;
exports.fetchData = fetchData;
