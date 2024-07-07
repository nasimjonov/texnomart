import React, { useState } from 'react';
import './Login.css'; // CSS faylini chaqirish
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Bu joyda login logikasini yozishingiz kerak, masalan:
    if (username === '' && password === '') {
      setLoggedIn(true);
      alert('Login muvaffaqiyatli!');
    } else {
      alert('Login muvaffaqiyatli!');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-form-container"> {/* CSS klassi */}
      {loggedIn ? (
        <div>
          <p>Siz tizimga kirdingiz!</p>
          <button onClick={handleLogout}>Chiqish</button>
        </div>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Foydalanuvchi nomi"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         <Link to={"/"}>
          <button type="button" onClick={handleLogin}>
            Kirish
          </button>
                  </Link>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
