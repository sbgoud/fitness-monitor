import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validUsers = ['a1', 'a2', 'a3', 'a4'];
    if (validUsers.includes(username)) {
      navigate('/home', { state: { username } });
    } else {
      setError('No user found with that name');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default Login;
