import React from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const AddUser = () => {
  const addUser = async (
    name,
    surname,
    email,
    city,
    zipcode,
    street,
    number
  ) => {
    const request = await axios.post(
      'https://zn-geocodingapp-server.azurewebsites.net/addUser',
      {
        name: name,
        surname: surname,
        email: email,
        city: city,
        zipcode: zipcode,
        street: street,
        number: number,
      }
    );
    console.log(request);
  };

  return (
    <div>
      <UserForm sendUser={addUser}></UserForm>
    </div>
  );
};

export default AddUser;
