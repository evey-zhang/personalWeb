import React from 'react';

function TextWithBackground({
  title = '',
  text = '',
  backgroundColor = '#ffffff',
  fontColor = '#000000',
  fontFamily = 'Arial, sans-serif',
  padding = '20px',
  fontSize = '20px'
}) {
  const containerStyle = {
    backgroundColor,
    color: fontColor,
    fontFamily,
    padding,
    textAlign: 'left',
    width: '100%',
    boxSizing: 'border-box',
    padding: '5vw 20vw',

  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };
  const textStyle = {
    fontSize, 
  };

  const textContent = text.split('\n').map((line, index) => (
    <p key={index} style = {textStyle}>{line}</p>
  ));

  return (
    <div style={containerStyle}>
      {title && <h2 style={titleStyle}>{title}</h2>}
      {textContent}
    </div>
  );
}

export default TextWithBackground;
