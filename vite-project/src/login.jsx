// Login.js
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'; // Import Link for routing

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered credentials match the stored ones
    if (username === storedUsername && password === storedPassword) {
      onLogin(true); // Login successful
      setRedirectToHome(true); // Redirect to home page after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  if (redirectToHome) {
    return <Redirect to="/" />; // Redirect to home page if logged in
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to Signup page */}
    </div>
  );
}

export default Login;
