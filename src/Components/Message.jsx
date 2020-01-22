import React, { useState, useEffect } from 'react';

function Message({setMessage}) {
	const [input, setInput] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		setMessage(input);
	}

  return (
    <form onSubmit={handleSubmit}>
    	<input type="text" placeholder="Enter Message" onChange={e => setInput(e.target.value)} />
    	<input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
}

export default Message;
