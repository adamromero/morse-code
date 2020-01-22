import React, { useState, useEffect } from 'react';
import morseCode from '../morseCode';

function Translate({message}) {
  const [code, setCode] = useState("");

  useEffect(() => {
    decode();
  });

  const decode = () => {
    let codeStr = "";
    for (let letter of message) {
      codeStr += morseCode[letter];
    }
    setCode(codeStr);
  }

  return (
    <div>
    Translate: {code}
    </div>
  );
}

export default Translate;
