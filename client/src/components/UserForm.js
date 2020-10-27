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
  constructor() {
    super();
    this.handleVoivodeshipChange = this.handleVoivodeshipChange.bind(this);
    this.handleDistrictChange = this.handleDistrictChange.bind(this);
    this.handleCommunityChange = this.handleCommunityChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStreetChange = this.handleStreetChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  state = {
    name: '',
    surname: '',
    email: '',
    voivodeship: '',
    district: '',
    community: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    error: '',
  };

  addUser = async () => {
    console.log(this.state.district, this.state.district, this.state.district);
    try {
      const request = await axios.post('http://localhost:3000/addUser', {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        voivodeship: this.state.voivodeship,
        district: this.state.district,
        community: this.state.community,
        city: this.state.city,
        street: this.state.street,
        number: this.state.number,
      });
      console.log(request);
    } catch (err) {
      this.setState({ error: err.response.data });
    }
  };

  handleVoivodeshipChange(e) {
    this.setState({ voivodeship: e.target.value });
  }
  handleDistrictChange(e) {
    this.setState({ district: e.target.value });
  }
  handleCommunityChange(e) {
    this.setState({ community: e.target.value });
  }
  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }
  handleStreetChange(e) {
    this.setState({ street: e.target.value });
  }
  handleNumberChange(e) {
    this.setState({ number: e.target.value });
  }

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
                {/* <MDBInput
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
                /> */}
                <ErrorMessage>{this.state.error}</ErrorMessage>
              </div>
              <AdressFormInput
                voivodeshipselect={this.handleVoivodeshipChange}
                districtselect={this.handleDistrictChange}
                communityselect={this.handleCommunityChange}
                cityselect={this.handleCityChange}
                streetselect={this.handleStreetChange}
                numberselect={this.handleNumberChange}
              />
              <div className="text-center">
                <MDBBtn onClick={this.addUser}>Zarejestruj</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default UserForm;
