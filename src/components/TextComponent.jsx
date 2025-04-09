import React from 'react';

function TextWithBackground({
  title = '',
  text = '',
  backgroundColor = '#ffffff',
  blurbColor = '#000000',
  fontFamily = 'Arial, sans-serif',
  padding = '5vw 20vw',
  titleSize = '36px',
  titleColor = '#000000',
  blurbSize = '20px',
  

}) {
  const containerStyle = {
    backgroundColor,
    fontFamily,
    textAlign: 'left',
    width: '100%',
    boxSizing: 'border-box',
    padding: padding,

  };

  const titleStyle = {
    fontSize: titleSize,
    fontWeight: 'bold',
    color: titleColor,
  };
  const textStyle = {
    fontSize: blurbSize,
    color: blurbColor,
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
