import React from 'react';
import './App.css';
import SearchUrl from './components/SearchUrl';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <UserList></UserList>
      <SearchUrl />
    </div>
  );
}

export default App;
