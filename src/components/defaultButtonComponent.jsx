import React from 'react';

function DefaultButton({ text, bgColor = 'blue', fontColor = 'white', onClick }) {
  // Style object for the button
  const buttonStyle = {
    backgroundColor: bgColor,
    color: fontColor,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease',  
  };

  // Button hover effect for visual feedback
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = 'dark' + bgColor; 
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = bgColor; 
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
