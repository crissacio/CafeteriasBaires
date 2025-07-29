import React from "react";

const Header = () => {
  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <header className="header">
      <div>
        <h1>TuCoffee ☕</h1>
        <span>Un mapa curado de cafeterías con alma.</span>
      </div>
      <button className="btn toggle-theme" onClick={toggleTheme}>
        🌙 Modo oscuro
      </button>
    </header>
  );
};

export default Header;
