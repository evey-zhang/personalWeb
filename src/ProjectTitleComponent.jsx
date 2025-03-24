import React from 'react';
import Button from './defaultButtonComponent'
function ProjectTitle({ bgColor, title, blurb, imageSrc, titleStyle = {}, blurbStyle = {}, imageStyle = {}, buttonText, buttonbgColor = 'blue', buttonFontColor = 'white', onClick  }) {

    // Default styles for title, blurb, and image
    
    const defaultTitleStyle = {
        fontSize: '32px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400', // Dark green color
        ...titleStyle,
    };

    const defaultBlurbStyle = {
        fontSize: '18px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400', // Dark green color
        ...blurbStyle,
    };

    const defaultImageStyle = {
        width: '100%', // Adjust to full width or any percentage
        height: 'auto', // Maintain aspect ratio
        objectFit: 'cover', // Cover the space without distorting image
        ...imageStyle,
    };

    const fullScreenStyle = {
        height: '100vh', // Full viewport height
        width: '100%', // Full width
        display: 'flex',
        justifyContent: 'space-between', // Place title on the left and image on the right
        alignItems: 'center', // Vertically center the content
        padding: '0 20px', // Some padding for spacing
        backgroundColor: bgColor,
    };

    return (
        <div style={fullScreenStyle}>
            {/* Left section for title and blurb */}
            <div style={{ flex: 1 }}>
                <h1 style={defaultTitleStyle}>{title}</h1>
                <p style={defaultBlurbStyle}>{blurb}</p>
                <Button
                    text = {buttonText}
                    onClick={onClick}
                    bgColor ={buttonbgColor}
                    fontColor={buttonFontColor} 

                />
            </div>

            {/* Right section for the image */}
            <div style={{ flex: 1 }}>
                <img src={imageSrc} alt="Project" style={defaultImageStyle} />
            </div>
        </div>
    );
}

export default ProjectTitle;
