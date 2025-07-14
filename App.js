import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const ws = new WebSocket('ws://localhost:8080');

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'history') {
        setMessages(message.data);
      } else if (message.type === 'message') {
        setMessages((prev) => [...prev, message.data]);
      }
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '') {
      const msg = { username: 'User', text: input };
      ws.send(JSON.stringify({ type: 'message', data: msg }));
      setInput('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="App">
      <div className="chat-container">
        <h2>Real-Time Chat</h2>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div key={idx} className="chat-message">
              <strong>{msg.username}:</strong> {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
