import React from 'react';

function TransitionSlide({ bgColor, title, imageSrc, trapColor = 'lightyellow', titleStyle = {}, imageStyle = {} }) {

    const defaultTitleStyle = {
        fontSize: '38px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400', 
        textAlign: 'center', 
        ...titleStyle,
    };

    const defaultImageStyle = {
        width: '100%', 
        height: 'auto', 
        objectFit: 'contain', 
        padding: '5vh',
        ...imageStyle,
    };

    const fullScreenStyle = {
        height: '100vh', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: bgColor,
        overflow: "hidden",
        paddingLeft: '30vw',
    };

    
    const trapezoidContainerStyle = {
        width: '100%', 
        height: '100%', 
        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%, 50% 0%)', // right trapezoid shape
        backgroundImage: `url(${imageSrc})`, 
        backgroundSize: 'contain', 
        backgroundPosition: 'center',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: trapColor,
        
    };

    return (
        <div style={fullScreenStyle}>
            {/* Left section for title */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={defaultTitleStyle}>{title}</h1>
            </div>

            {/* Right section for the trapezoid container with background image */}
            <div style={trapezoidContainerStyle}></div>
        </div>
    );
}

export default TransitionSlide;
