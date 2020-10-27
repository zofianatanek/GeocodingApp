import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const UserTable = (props) => {
  const user = props.users.map((user, index) => {
    return (
      <tr id="item-columnd" key={index}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.surname}</td>
        <td>{user.email}</td>
        <td>{user.voivodeship}</td>
        <td>{user.district}</td>
        <td>{user.community}</td>
        <td>{user.city}</td>
        <td>{user.street}</td>
        <td>{user.number}</td>
      </tr>
    );
  });
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>L.p.</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>E-mail</th>
          <th>Województwo</th>
          <th>Powiat</th>
          <th>Gmina</th>
          <th>Miasto</th>
          <th>Ulica</th>
          <th>Numer</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>{user}</MDBTableBody>
    </MDBTable>
  );
};

export default UserTable;
