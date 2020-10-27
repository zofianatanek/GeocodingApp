import React from 'react';
import UsersList from './components//UsersList';
import UserForm from './components/UserForm';
import styled from 'styled-components';

function App() {
  const AppWrapper = styled.section`
    margin: 60px 60px;
    text-align: center;
    h2 {
      margin: 40px;
    }
    div.row {
      margin: 80px;
      display: flex;
      justify-content: center;
    }
  `;
  return (
    <AppWrapper className="App">
      <h2>Witaj w aplikacji geokodującej</h2>
      <UserForm />
      <UsersList />
    </AppWrapper>
  );
}

export default App;
