import { useState } from 'react';


export default function Login({ isOpen, onClose }:{ isOpen: boolean, onClose: any }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* if (!isOpen) return null; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
    onClose();
  }; 

  return (
    <div className="login">
      <div>
        <h2>Log in</h2>
        <button className="closeLogin" onClick={onClose}>X</button>
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
          <button className="sign-in-btn" type="submit">Sign In</button>
        </form>
        
      </div>
    </div>
  );
}
