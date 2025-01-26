import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Crud Products Jet</h1>
      <nav className="header-nav">
        <a href="/" className="header-link">Home</a>
        <a href="/add" className="header-link">Adicionar Produto</a>
      </nav>
    </header>
  );
};

export default Header;
