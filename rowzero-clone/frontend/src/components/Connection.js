import React, { useState } from 'react';
import axios from 'axios';

const Connection = () => {
  const [status, setStatus] = useState('Disconnected');

  const connect = async () => {
    try {
      await axios.post('/api/connect');
      setStatus('Connected');
    } catch (error) {
      console.error('Error connecting:', error);
      setStatus('Connection failed');
    }
  };

  const disconnect = async () => {
    try {
      await axios.post('/api/disconnect');
      setStatus('Disconnected');
    } catch (error) {
      console.error('Error disconnecting:', error);
    }
  };

  return (
    <div className="connection">
      <h3>Connection Status: {status}</h3>
      <button onClick={connect} disabled={status === 'Connected'}>Connect</button>
      <button onClick={disconnect} disabled={status === 'Disconnected'}>Disconnect</button>
    </div>
  );
};

export default Connection;