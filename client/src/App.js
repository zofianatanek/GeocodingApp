import React from 'react';
import UsersList from './components//UsersList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <h2>Welcome to Geocoding App</h2>
      <UserForm />
      <UsersList />
    </div>
  );
}

export default App;
