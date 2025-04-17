import React from 'react';

function Footer({
    backgroundColor ='lightyellow',
    fontColor = '#ffffff',
    iconColor = 'var(--darkgreen-color)'

}) {
    const footerStyle = {
        backgroundColor: backgroundColor,
        padding: '20px',
        textAlign: 'center',
        bottom: 0,
        width: '100%',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: fontColor,
        margin: '0 10px',
        fontSize: '18px',
    };

    const iconStyle = {
        fontSize: '24px',  
        marginRight: '8px',
        color: iconColor,  
        transition: 'color 0.3s ease',    
    };

    const iconHoverStyle = {
        color: '#0a66c2',  
    };

    const headingStyle = {
        fontFamily: 'Gluten, sans-serif',  
        fontSize: '20px',                 
        color: fontColor,  
    };

    return (
        <footer style={ footerStyle }>
            <p style={ headingStyle }>Connect with me:</p>
            <div>
                {/* Email Icon */ }
                <a href="mailto: ev.thezhangs@gmail.com" style={ linkStyle }>
                    <i style={ iconStyle } className="fas fa-envelope"></i>Email
                </a>

                {/* LinkedIn Icon */ }
                <a href="https://www.linkedin.com/in/evelynzhang-usc/" style={ linkStyle }>
                    <i style={ iconStyle } className="fab fa-linkedin"></i>LinkedIn
                </a>

                {/* Resume Icon */ }
                <a href="https://drive.google.com/file/d/1fIZjpSr6IqeMx90fh1tdhea3TqZ62y5-/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={ linkStyle }>
                    <i style={ iconStyle } className="fas fa-file-pdf"></i>Resume
                </a>
            </div>
        </footer>
    );
}

export default Footer;
