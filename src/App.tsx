import React from 'react';
import './App.css';
import SearchUrl from './components/SearchUrl/SearchUrl';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <UserList></UserList>
      <SearchUrl />
    </div>
  );
}

export default App;
