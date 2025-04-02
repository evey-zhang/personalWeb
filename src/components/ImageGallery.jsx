import React, { useState } from 'react';

function ImageGallery({ images = [], backgroundColor = '#f0f0f0' , imageBgColor = "#f0f0f0"}) {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
  };

  const goToImage = (index) => {
    setCurrentIndex(index); 
  };

  return (
    <div style={{ ...styles.galleryContainer, backgroundColor }}>
      {/* Image Title */}
      <h2 style={styles.imageTitle}>{images[currentIndex].title}</h2>
      
      
        
      <div style={{...styles.imageContainer, backgroundColor: imageBgColor}}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          style={styles.image}
        />
        {/* Image Blurb */}

        <p style={styles.imageBlurb}>{images[currentIndex].blurb}</p>
      </div>

      {/* Dots for image navigation */}
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToImage(index)}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? '#333' : '#ccc', 
            }}
          />
        ))}
      </div>

      {/* Next Button */}
      <button onClick={goToNextImage} style={styles.nextButton}>Next</button>
    </div>
  );
}

const styles = {
  galleryContainer: {
    textAlign: 'center',
    padding: '5vh 15vw',
    position: 'relative',
    width: '100%',
    height: '120vh',
    maxHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '50px',
  },
  image: {
    width: '100%',
    height: '80%',
    objectFit: 'contain',
    borderRadius: '10px',
    padding: '50px 50px',
  },
  imageTitle: {
    marginTop: '10px',
    fontSize: '36px',
    color: "darkgreen",
    fontFamily: 'Gluten, sans-serif',
    alignItems: "left",
  },
  imageBlurb: {
    fontSize: '18px',
    color: 'darkgreen',
    fontFamily: 'Gluten, sans-serif',
    marginTop: '10px',
    maxWidth: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.5',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    gap: '10px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.5s',
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default ImageGallery;
