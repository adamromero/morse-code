import React, { useState, useEffect } from "react";
import morseCode from "./morseCode";
import dot from "./audio/dot.mp3";
import dash from "./audio/dash.mp3";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [code, setCode] = useState("");
  const dotSound = new Audio(dot);
  const dashSound = new Audio(dash);

  useEffect(() => {
    decode();
  });

  const decode = () => {
    let codeStr = "";
    for (let letter of message) {
       codeStr += morseCode[letter] ? `${morseCode[letter]} ` : " ";
    }
    setCode(codeStr);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage(input);
  };

  const handlePlay = () => {
    let i = 0;
    window.interval = setInterval(function() {
        const letter = code.charAt(i++);
        if (letter === ".") {
          dotSound.play();
        } else if (letter === "-") {
          dashSound.play();
        }
        if (i > code.length) {
            clearInterval(window.interval);
        }
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(window.interval);
  };

  return (
    <div className="App">
       <header>Morse Code</header>
       <div>
          <form onSubmit={handleSubmit}>
             <input
                type="text"
                placeholder="Enter Message"
                onChange={e => setInput(e.target.value)}
             />
             <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
          <div>Translate: {code}</div>
          <div>
           <button onClick={handlePlay}>Play</button>
           <button onClick={handleStop}>Stop</button>
        </div>
       </div>
    </div>
  );
}

export default App;
