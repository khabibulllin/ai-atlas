import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ToolGrid from './components/ToolGrid';
import { aiTools, categories } from './data/tools';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="main-content">
        <div className="container">
          <div className="intro-section">
            <h1 className="main-title">AI Atlas</h1>
            <p className="main-subtitle">
              Discover the best AI tools to supercharge your development workflow
            </p>
            <div className="stats">
              <span className="stat-item">
                <span className="stat-number">{aiTools.length}</span>
                <span className="stat-label">AI Tools</span>
              </span>
              <span className="stat-item">
                <span className="stat-number">{categories.length - 1}</span>
                <span className="stat-label">Categories</span>
              </span>
            </div>
          </div>
          
          <FilterBar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <ToolGrid tools={filteredTools} />
          
          {filteredTools.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No tools found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 AI Atlas. Curated with ❤️ for developers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;