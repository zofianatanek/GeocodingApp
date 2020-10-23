const mongoose = require('mongoose');

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
});

const User = mongoose.model('User', userSchema);

async function createUser() {
  const user = new User({
    name: 'Name',
    surname: 'Surname',
    email: 'name.surname@mail.com',
  });

  const result = await user.save();
  console.log(result);
}

createUser();
