import React from 'react';
import './Welcome.css';

export default function Welcome() {
  return (
    <div className="welcome-background">
      <div className="welcome-card">
        <div className="welcome-dot"></div>

        <div className="welcome-text">
          <h1>Welcome to Parkor</h1>
          <p>Lorem ipsum</p>
        </div>

        <div className="welcome-icon">
          {/* Replace with actual image/icon as needed */}
          <span role="img" aria-label="tire">🛞</span>
        </div>

        <div className="welcome-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-outline">Log In</button>
        </div>
      </div>
    </div>
  );
}
