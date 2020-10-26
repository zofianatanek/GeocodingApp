import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';
import styled from 'styled-components';
import AdressFormInput from './AdressFormInput';

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

class UserForm extends React.Component {
  state = {
    name: '',
    surname: '',
    email: '',
    city: '',
    zipcode: '',
    street: '',
    number: '',
    error: '',
  };

  addUser = async () => {
    try {
      const request = await axios.post('http://localhost:3000/addUser', {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        city: this.state.city,
        zipcode: this.state.zipcode,
        street: this.state.street,
        number: this.state.number,
      });
      console.log(request);
    } catch (err) {
      this.setState({ error: err.response.data });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Rejestracja</p>
              <div className="grey-text">
                <MDBInput
                  label="Imię"
                  group
                  size="sm"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
                <MDBInput
                  label="Nazwisko"
                  group
                  size="sm"
                  value={this.state.surname}
                  onChange={(e) => this.setState({ surname: e.target.value })}
                />
                <MDBInput
                  value={this.state.email}
                  label="E-mail"
                  group
                  type="email"
                  error="wrong"
                  success="right"
                  size="sm"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <MDBInput
                  label="Miasto"
                  group
                  size="sm"
                  onChange={(e) => this.setState({ city: e.target.value })}
                />
                <MDBInput
                  label="Kod pocztowy"
                  group
                  size="sm"
                  onChange={(e) => this.setState({ zipcode: e.target.value })}
                />
                <MDBInput
                  label="ulica"
                  group
                  size="sm"
                  onChange={(e) => this.setState({ street: e.target.value })}
                />
                <MDBInput
                  label="numer"
                  group
                  size="sm"
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
                <ErrorMessage>{this.state.error}</ErrorMessage>
              </div>
              <div className="text-center">
                <MDBBtn onClick={this.addUser}>Zarejestruj</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <AdressFormInput />
      </MDBContainer>
    );
  }
}

export default UserForm;
