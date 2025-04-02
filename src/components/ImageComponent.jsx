import React from 'react';

function ImageComponent({
  src,
  alt,
  style = {},
  padding, 
  backgroundColor = '#f0f0f0', 
}) {
  const defaultImageStyle = {
    width: '100%', 
    maxHeight: '70vh', 
    objectFit: 'contain', 
    padding, 
    ...style, 
  };

  const containerStyle = {
    backgroundColor, 
    padding, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    height: '80%', 
  };

  

  return (
    <div style={containerStyle}>
      <img src= {src} style={defaultImageStyle} />
    </div>
  );
}

export default ImageComponent;
