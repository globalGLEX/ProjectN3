import { useState } from 'react';


export default function Login({ isOpen, onClose }:{ isOpen: boolean, onClose: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* if (!isOpen) return null; */

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
    onClose();
  }; 

  return (
    <div className="login">
      <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit} >
          <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
          <button type="submit">Sign In</button>
        </form>
        <button className="closeLogin"onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
