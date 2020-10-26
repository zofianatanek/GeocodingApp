import React from 'react';
import UsersList from './components//UsersList';
import UserForm from './components/UserForm';
import UsersMap from './components/UsersMap';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Geocoding App</h2>
      <UserForm />
      <UsersList />
      <UsersMap />
    </div>
  );
}

export default App;
