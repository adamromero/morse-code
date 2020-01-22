import React, { useState } from 'react';
import Message from './Components/Message';
import Translate from './Components/Translate';

import './App.css';

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <header>
        Morse Code
      </header>
      <div>
        <Message setMessage={setMessage} />
        <Translate message={message} />
      </div>
    </div>
  );
}

export default App;
