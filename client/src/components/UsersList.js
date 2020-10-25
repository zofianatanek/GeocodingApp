import React from 'react';
import axios from 'axios';
import UserTable from './User';

class UsersList extends React.Component {
  state = { users: [] };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await axios.get('http://localhost:3000/getUsers', {});
    console.log(response);
    this.setState({ users: response.data });
  };

  render() {
    let table;
    if (this.state.users.length !== 0) {
      table = <UserTable users={this.state.users}></UserTable>;
    } else {
      table = 'Nie dodane jeszcze użytkownikow';
    }

    return (
      <div>
        <h3>Users:</h3>
        {table}
      </div>
    );
  }
}
export default UsersList;
