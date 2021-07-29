import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer/GameContainer';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <UserList></UserList>
      <GameContainer />
    </div>
  );
}

export default App;
