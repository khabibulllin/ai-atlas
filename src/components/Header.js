import React from 'react';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">AI Atlas</span>
          </div>
          
          <div className="search-container">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search AI tools..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          
          <div className="header-actions">
            <a 
              href="https://github.com/khabibulllin/ai-atlas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              <span>⭐</span>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;