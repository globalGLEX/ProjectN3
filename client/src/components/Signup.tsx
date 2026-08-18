import { useState } from 'react';


export default function Signup({ isOpen, onClose }:{ isOpen: boolean, onClose: any }) {
  const [email, setEmail] = useState('');
  

  /* if (!isOpen) return null; */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Signing up with ${email}`);
    onClose();
  }; 

  return (
    <div className="signup">
      <div>
        <h2>Sign up to ProjectN3</h2>
        <button className="closeSignup" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit} >
          <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            
          />
          
          <button className="continue-btn" type="submit">Continue</button>
        </form>
        
      </div>
    </div>
  );
}