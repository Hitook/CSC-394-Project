import React, { useState } from 'react';
import UserBar from '../components/Userbar'
import './App.css';

function App() {

  const [user, setUser] = useState("");

  return (

    <div>
      <div>
        <UserBar user={user} setUser={setUser} />
      </div>

      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </div>

  );
}

export default App;

