import React from 'react';

function ContentSlide({ 
    bgColor, 
    title, 
    blurb, 
    imageSrc, 
    titleStyle = {}, 
    blurbStyle = {}, 
    imageStyle = {},
    isLeftRightLayout = false, 
    titleBackgroundColor = '#f0f0f0', 
    hasBackground = false, 
    rectBackgroundColor = '#d3d3d3',
    minHeight,  // New prop to optionally control the minHeight of the container
}) {

    const defaultTitleStyle = {
        fontSize: '32px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400', 
        justifyContent: 'left',
        ...titleStyle,
    };

    const defaultBlurbStyle = {
        fontSize: '10px',
        fontFamily: 'Gluten, sans-serif',
        color: '#FFFFFF', 
        position: 'relative', 
        textAlign: 'left',
        justifyContent: "left",
        ...blurbStyle,
    };

    const defaultImageStyle = {
        width: '100%', 
        height: 'auto', 
        maxHeight: '60vh', 
        objectFit: 'contain', 
        ...imageStyle,
    };

    const containerStyle = {
        display: 'flex',
        padding: '5vw 20vw',
        flexDirection: isLeftRightLayout ? 'row' : 'column', 
        height: 'auto', 
        justifyContent: 'flex-start', 
        alignItems: 'left',
        backgroundColor: bgColor || '#f0f0f0',
        minHeight: minHeight || 'auto', // Conditionally apply the minHeight if provided
    };

    const imageContainerStyle = {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    };

    const textContainerStyle = {
        flex: 1, 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'left',
    };

    const backgroundStyle = {
        backgroundColor: rectBackgroundColor, 
        padding: '20px', 
        borderRadius: '30px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%', 
    };

    return (
        <div style={containerStyle}>
            <div style={textContainerStyle}>
                <h1 style={defaultTitleStyle}>{title}</h1>
                <p style={defaultBlurbStyle}>{blurb}</p>
            </div>

            <div style={{ flex: 1, ...imageContainerStyle }}>
                {hasBackground ? (
                    <div style={backgroundStyle}>
                        <img src={imageSrc} alt="Project" style={defaultImageStyle} />
                    </div>
                ) : (
                    <img src={imageSrc} alt="Project" style={defaultImageStyle} />
                )}
            </div>
        </div>
    );
}

export default ContentSlide;
