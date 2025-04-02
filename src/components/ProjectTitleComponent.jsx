import React from 'react';
import Button from './defaultButtonComponent'
function ProjectTitle({ bgColor, title, blurb, imageSrc, titleStyle = {}, blurbStyle = {}, imageStyle = {}, buttonText, buttonbgColor = 'blue', buttonFontColor = 'white', onClick }) {


    const defaultTitleStyle = {
        fontSize: '32px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400',
        ...titleStyle,
    };

    const defaultBlurbStyle = {
        fontSize: '18px',
        fontFamily: 'Gluten, sans-serif',
        color: '#006400',
        ...blurbStyle,
    };

    const defaultImageStyle = {
        width: '100%', 
        height: 'auto', 
        objectFit: 'contain', 
        ...imageStyle,
    };

    const fullScreenStyle = {
        height: '100vh', 
        width: '100%', 
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '5vw 20vw',
        backgroundColor: bgColor,
    };

    return (
        <div style={ fullScreenStyle }>
            {/* Left section for title and blurb */ }
            <div style={ { flex: 2 } }>
                <h1 style={ defaultTitleStyle }>{ title }</h1>
                <p style={ defaultBlurbStyle }>{ blurb }</p>
                <Button
                    text={ buttonText }
                    onClick={ onClick }
                    bgColor={ buttonbgColor }
                    fontColor={ buttonFontColor }

                />
            </div>

            {/* Right section for the image */ }
            <div style={ { flex: 1 } }>
                <img src={ imageSrc } alt="Project" style={ defaultImageStyle } />
            </div>
        </div>
    );
}

export default ProjectTitle;
