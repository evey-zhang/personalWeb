import React, { useEffect, useState } from 'react';

function ImageHorizontalSlide({
    bgColor,
    imageSrc,
    imageStyle = {},
    scrollSpeed = 0.3, 
    scrollDirection = 'left-to-right', 
}) {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Handle scroll event to track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Set the scroll position on state change
        };

        window.addEventListener('scroll', handleScroll);

 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const defaultImageStyle = {
        width: '100%', 
        height: 'auto', 
        maxHeight: '70vh', 
        objectFit: 'contain',
        transition: 'transform 0.2s ease-out', 
        transform: `translateX(${
            scrollDirection === 'left-to-right'
                ? (scrollPosition * scrollSpeed) % window.innerWidth - window.innerWidth
                : -(scrollPosition * scrollSpeed) % window.innerWidth + window.innerWidth
        }px)`,
        ...imageStyle,
    };

    const containerStyle = {
        display: 'flex',
        overflow: 'hidden', 
        width: '100%',
        justifyContent: scrollDirection === 'left-to-right' ? 'flex-start' : 'flex-end', // Conditional justification
        alignItems: 'center', // Center the content vertically
        backgroundColor: bgColor || '#f0f0f0',
    };



    return (
        <div style={containerStyle}>
            <img src={imageSrc} alt="Project" style={defaultImageStyle} />
        </div>
    );
}

export default ImageHorizontalSlide;
