const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 40,
  },
  surname: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 40,
  },
  email: {
    type: String,
    // required: true,
    minlength: 2,
    maxlength: 40,
    unique: true,
  },
});

const User = mongoose.model('User', userSchema);

async function createUser(req, res) {
  const user = new User({
    name: req.name,
    surname: req.surname,
    email: req.email,
  });

  const result = await user.save();
  res.send(user);
  return result;
}

exports.createUser = createUser;
