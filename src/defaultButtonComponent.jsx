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
    transition: 'all 0.3s ease',  // Optional: for smooth hover effect
  };

  // Button hover effect for visual feedback
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = 'dark' + bgColor; // Change to a darker shade on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = bgColor; // Revert to original background on mouse leave
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
