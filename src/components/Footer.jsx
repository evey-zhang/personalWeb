import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: 'lightyellow',
        padding: '20px',
        textAlign: 'center',
        bottom: 0,
        width: '100%',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'var(--darkgreen-color)',
        margin: '0 10px',
        fontSize: '18px',
    };

    const iconStyle = {
        fontSize: '24px',  // Adjust the size of the icon
        marginRight: '8px',
        color: 'var(--darkgreen-color)',  // Set the default color
        transition: 'color 0.3s ease',    // Smooth color transition on hover
    };

    const iconHoverStyle = {
        color: '#0a66c2',  // LinkedIn blue color
    };

    const headingStyle = {
        fontFamily: 'Gluten, sans-serif',  // Apply the desired font here
        fontSize: '20px',                 // Optional: change font size
        color: 'var(--darkgreen-color)',  // Optional: change font color
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
                <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" style={ linkStyle }>
                    <i style={ iconStyle } className="fas fa-file-pdf"></i>Resume
                </a>
            </div>
        </footer>
    );
}

export default Footer;
