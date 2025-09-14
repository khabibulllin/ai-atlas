import React from 'react';

const ToolCard = ({ tool }) => {
  const getPricingColor = (pricing) => {
    switch (pricing) {
      case 'Free': return 'pricing-free';
      case 'Freemium': return 'pricing-freemium';
      case 'Paid': return 'pricing-paid';
      default: return 'pricing-unknown';
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  return (
    <div className="tool-card">
      <div className="tool-card-header">
        <div className="tool-icon">{tool.icon}</div>
        <div className="tool-info">
          <h3 className="tool-name">{tool.name}</h3>
          <span className="tool-category">{tool.category}</span>
        </div>
        <div className={`pricing-badge ${getPricingColor(tool.pricing)}`}>
          {tool.pricing}
        </div>
      </div>
      
      <div className="tool-card-body">
        <p className="tool-description">{tool.description}</p>
        
        <div className="tool-rating">
          <div className="stars">
            {renderStars(tool.rating)}
          </div>
          <span className="rating-value">{tool.rating}</span>
        </div>
        
        <div className="tool-tags">
          {tool.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      
      <div className="tool-card-footer">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="tool-link"
        >
          <span>Visit Tool</span>
          <span className="link-arrow">→</span>
        </a>
      </div>
    </div>
  );
};

export default ToolCard;