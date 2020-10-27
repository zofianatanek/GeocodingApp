import React from 'react';
import axios from 'axios';
import UserTable from './User';
import UsersMap from './UsersMap';

class UsersList extends React.Component {
  state = { users: [] };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await axios.get(
      'https://zn-geocodingapp-server.azurewebsites.net/getUsers',
      {}
    );
    console.log(response);
    this.setState({ users: response.data });
  };

  render() {
    let table;
    let map;
    if (this.state.users.length !== 0) {
      table = <UserTable users={this.state.users}></UserTable>;
      map = <UsersMap users={this.state.users}></UsersMap>;
    } else {
      table = 'Nie dodane jeszcze użytkownikow';
      map = <UsersMap users={this.state.users}></UsersMap>;
    }

    return (
      <div>
        <h3 style={{ margin: '60px 20px' }}>Przeglądanie użytkowników:</h3>
        {table}
        {map}
      </div>
    );
  }
}
export default UsersList;
