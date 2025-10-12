import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #d7e1ec, #f9fbfc)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <header
        style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#2c3e50',
          fontFamily: "'Poppins', sans-serif",
          marginBottom: '2rem',
          letterSpacing: '1px',
          userSelect: 'none'
        }}
      >
        🎓 Student Portal
      </header>
      <div
        className="card shadow-sm rounded-4 p-4"
        style={{
          minHeight: '540px',
          maxWidth: '420px',
          width: '100%',
          backdropFilter: 'blur(12px)',
          background: '#fffdfdcc'
        }}
      >
        {isLogin ? (
          <LoginForm onSwitch={toggleForm} />
        ) : (
          <RegisterForm onSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
