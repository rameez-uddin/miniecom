import React from 'react';
import '../App.css'

function BasePage({ children }) {
  return (
    <div className="base-page">
      {children}
    </div>
  );
}

export default BasePage;